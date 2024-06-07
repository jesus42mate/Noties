'use client'
import { CliCommand } from "@/components/code-components/CliCommand";
import MainHeader from "@/components/headers/MainHeader";
import CodeSnippet from "@/components/islands/CodeSnippet";
import { Segment } from "@/components/segments/Segment";
import { Divider, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react";

export default function WebServers() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <VStack mb="2rem">

      <MainHeader title="Web Servers" sub_title="on Ubuntu 24.04" />

      <Segment title="Installing NGINX">
        <Text>NGINX is a web server written in C. It is fast as heck.</Text>
        <Text>Installing it is pretty easy, just do</Text>
        <CliCommand>sudo apt install nginx</CliCommand>
        <Text>And start the server by running</Text>
        <CliCommand>sudo service nginx start</CliCommand>
      </Segment>

      <Segment title="Permission Issues are Annoying">
        <Text>
          Sometimes you will find youself not being able to edit a file in your server because
          you don't have permission to do edit it, for example this tends to happen in /etc files
          (please don't edit /etc files unless know exactly what you are doing) or some files inside
          the /var directory (again, only edit if you know what you are doing)
        </Text>
        <Divider my="1rem" />
        <Text>
          {"If you tried to edit the default index.<debian-something>.html file that is opened by default when you first start the nginx web server and look for it in your browser, you might have noticed that you needed sudo permission to edit it (or any other file inside the /var/www/ folder), this is... annoying." }</Text>
        <Text>
          When this happens, we might want to give our user permission to edit a certain part
          of the filesystem.
        </Text>
        <Divider my="1rem" />
        <Text>We can do that.</Text>
        <Text><b>Right now!</b></Text>
        <CliCommand>sudo chown -R $USER:$USER /var/www</CliCommand>
        <Text>This will change ownership (chown) of the /var/www folder to the user:group $USER:$USER</Text>
        <Text>When I did this, I was standing on /var/www, that may or may not be important!</Text>
      </Segment>

      <Segment title="Creating our app's server">
        <Text>Our app will have it's own server, written in nodejs.</Text>
        <Text>It will handle the requests that our web server will be proxying towards us.</Text>
        <Text>So let's create the actual server!</Text>
        <CodeSnippet filename="/var/www/app/app.js">
          {"const http = require('http');"}
          {""}
          {"http.createServer((req, res) => {"}
          {"  res.write('hello user! this is a web server :D');"}
          {"  res.end();"}
          {"}).listen(3000);"}
          {""}
          {"console.log('server started at port 3000')"}
        </CodeSnippet>
      </Segment>

      <Segment title="Proxying from our web server towards our application server">
        <Text>
          We now want our Nginx server to redirect us towards our application, but we might need a new
          nginx custom configuration, and since we don't want to modify the default config, we will create
          a new one inside /etc/nginx/sites-enabled/
        </Text>
        <CliCommand>{"sudo vi /etc/nginx/sites-enabled/<your-app-name>"}</CliCommand>
        <Text>
          This could be called whatever you wanted, but naming it after our application is not a bad idea.
        </Text>
      </Segment>
      <Segment title="Proxying the Nginx server into our App">
        <Text>Inside the /etc/ folder, you can find the nginx files.</Text>
        <Text>
          In case you were wondering, the /etc/ folder is a very important one. It is where all the system-wide
          configuration files are stored. And this is where our nginx config files are stored too!
        </Text>
        <Text>
          Let's edit the config files so that we can route the request coming to our site into the server
          of our application. For that, we have to add a new server inside <b>/etc/nginx/sites-enabled/</b> with 
          a name of our liking, normally the name of the application it is pointing to.
        </Text>
        <Divider my="1rem" />
        <CliCommand>{"sudo vi /etc/nginx/sites-enabled/<app_name>"}</CliCommand>
        <Text>Inside it, we will define our server in the Nginx language or whatever it uses!</Text>
        <CodeSnippet filename="/etc/nginx/sites-enabled/<your-site>">
          {'server {'}
          {'  listen 80 default_server;'}
          {'  listen [::]:80 default_server;'}
          {'  index index.html;'}
          {'  '}
          {'  root /var/www/html;'}
          {'  server_name <domain_name>.com;'}
          {'}'}
        </CodeSnippet>
        <Text>It's listening on port 80 (IPv4) and also on port 80 using IPv6</Text>
        <Text>
          The server name is important because its what the server will compare with the request
          coming in and will respond accordingly if it finds a match.
        </Text>
        <Divider my="1rem" />
        <Text>Let's now do a test to see if our nginx is correctly configured</Text>
        <CliCommand>nginx -t</CliCommand>
        <Text>This should return an error, because you didn't run it with sudo!</Text>
        <CliCommand>sudo nginx -t</CliCommand>
        <Text>It should say everything is ok! I hope!</Text>
        <Divider my="1rem" />
        <Text>
          Now we are going to set the location that nginx is going to send us to according top
          where the request is marking us, if the request is asking for whatever.com<b>/ </b>
          (notice the slash) then the server is going to send us towards the main page, and
          that behaviour is defined like so:
        </Text>
        <CodeSnippet filename="/etc/nginx/sites-enabled/<your-site>">
          {'  ...'}
          {'  ...'}
          {'  location / {'}
          {'    proxy_pass http://127.0.0.1:3000'}
          {'  }'}
          {'}'}
        </CodeSnippet>
        <Text>
          Now the proxy towards our app is complete! Because the nginx server is proxying towards
          the port 3000 on the host machine, and guess <b>what</b> we will find when we call the
          port 3000?? If you said <b>"THE NODE SERVER!!!"</b> then you would be right!
        </Text>
        <Text>
          But before we continue, since nginx is running and does not have something similar to
          hot reload implemented, we need to restart it.
        </Text>
        <CliCommand>sudo services nginx restart</CliCommand>
        <Text>If nothing happened... Good!</Text>
      </Segment>

      <Segment title="Starting the server!">
        <Text>
          Now we could try to curl our IP from a browser or in a terminal but in order to actually
          receive something from the call, our node server must be running to receive the request.
        </Text>
        <CliCommand>node app.js</CliCommand>
        <Text>
          With our server running, the curl should return whatever message we left on the res.write()!
        </Text>
        <Divider my="1rem" />
        <Text>
          But... the node server might stop if we close our laptop or anything, keeping the server
          running should not depend on the shell.
        </Text>
        <Text>Installing pm2 (process manager 2) will allow us to run node as a backgrund </Text>
        <CliCommand>sudo npm i pm2 -g</CliCommand>
        <Text><b>i</b> means install and the flag <b>-g</b> means to install globally</Text>
        <CliCommand>pm2 start app.js --watch</CliCommand>
      </Segment>

      <Segment title="Making our server re-run automatically">
        <Text>
          Having to re-start our server, either the actual node server or the pm2 process is...
          very cumbersome, I would love it if we could have a way to have it restart automatically
        </Text>
        <Divider my="1rem" />
        <Text>
          Luckily for you (and me) pm2 is very powerful. It allows us to save the process list with...
        </Text>
        <CliCommand>pm2 save</CliCommand>
        <Text>and by running...</Text>
        <CliCommand>pm2 startup</CliCommand>
        <Text>
          it will create for us a command that autoruns the saved processes, just copy and paste it
          and we are set.
        </Text>
        <Divider my="1rem" />
        <Text>If you want to remove the script, use</Text>
        <CliCommand>pm2 unstartup systemd</CliCommand>
      </Segment>

      <Segment title="Making sure github usses our ssh keys">
        <Text>
          We need to create a config file inside the ssh folder in order for github to know which
          ssh key to use, otherwhise it might just use the first key it finds.
        </Text>
        <CliCommand>vi ~/.ssh/config</CliCommand>
        <CodeSnippet filename="~/.ssh/config">
          {'Host github.com'}
          {'  Hostname github.com'}
          {'  IdentityFile ~/.ssh/<key>'}
        </CodeSnippet>
        <Text>Checking if our ssh connection is working properly, we can do</Text>
        <CliCommand>ssh -T git@github.com</CliCommand>
        <Text>you can add v to -T (-Tv) if you want a verbose version of the test</Text>
        <Text>
          Remember, the key should be the one you added in the github account that owns the repo.
        </Text>
        <Divider my="1rem" />
        <Text>
          The correct permissions for the private key and the config file are pretty strict
          and github will not allow you to have whatever you want permissions in those files,
          you can use the following command to check the connection to github and that the ssh
          key you added to your account.
        </Text>
        <CliCommand>ssh -vT git@github.com</CliCommand>
        <Text>if the response is not something positive, here is how you change the permissions</Text>
        <CliCommand>{"sudo chmod 600 ~/.ssh/config ~/.ssh/<private_key>"}</CliCommand>
      </Segment>

      <Segment title="Useful commands">
        <Text>Killing a process</Text>
        <CliCommand>{'pkill <process>'}</CliCommand>
      </Segment>

      <Segment title="Firewalls">
        <Text>There is something called a <b>ufw</b> which stands for <b>uncomplicated firewall</b></Text>
        <Divider my="1rem" />
        <Text><b>ufw</b>{"'s allow us to set the rules on how we want to treat incoming "} requests
          and which requests exactly, http, https or ssh.
        </Text>
        <Text>to view the status of our ufw, use</Text>
        <CliCommand>sudo ufw status</CliCommand>
        <Text>We are going to enable ufw to take over management of our firewall</Text>
        <CliCommand>sudo ufw allow ssh</CliCommand>
        <CliCommand>sudo ufw allow http</CliCommand>
        <Text>
          With that, we have allowed ufw to manage our ssh and http. After that, 
          we can enable the uncomplicated firewall!
        </Text>
        <CliCommand>sudo ufw enable</CliCommand>
      </Segment>

      <Segment title="Useful commands">
        <Text>Killing a process</Text>
        <CliCommand>{'pkill <process>'}</CliCommand>
        <Text>Looking at all well known ports</Text>
        <CliCommand>{'less /etc/services'}</CliCommand>
      </Segment>

      <Segment title="Using CRON">
        <Text>Cron is used to do things in set intervals of time, or at a certain moment.</Text>
        <Text>To edit the CRON jobs, do</Text>
        <CliCommand>crontab -e</CliCommand>
        <Text>If you want to know how the cron notation is used,
          <Link display="inline" target="#" href="https://crontab.guru/"> crontab.guru </Link>
          is a great resource
        </Text>

        <Text>
          To execute a shell script that pulls from origin every 2 minutes, create a 
          bash script that pulls from master/main, but before that, find where bash is located
        </Text>
        <CliCommand>which bash</CliCommand>
        <Text>and create a .sh file, name does not matter.</Text>

        <CodeSnippet filename="/var/www/app/pull.sh">
          {"#!/usr/bin/bash"}
          {""}
          {"git pull origin master"}
        </CodeSnippet>

        <Text>And now, to add a cron activity every 2 minutes</Text>
        <CliCommand>crontab -e</CliCommand>
        <Text>Will open the /tmp/crontab... and you can add the following:</Text>
        <CodeSnippet filename="/tmp/crontab..">
          {"/*2 * * * * sh /var/www/app/pull.sh"}
        </CodeSnippet>
        <Text>But if you want it to be logged towards syslog, do</Text>
        <CodeSnippet filename="/tmp/crontab..">
          {"/*2 * * * * sh /var/www/app/pull.sh 2>&1 | logger -t pull.sh"}
        </CodeSnippet>
        <Text>And you can look at the logs in real time using</Text>
        <CliCommand>sudo tail -f /var/log/syslog</CliCommand>
      </Segment>

      <Segment title="Redirection using io">
        <Text>With different symbols we can utilize the output of different operations</Text>
        <Text>the <b>{'>'}</b> is to use the standard output of the command on the left
          in the command, file or whatever is on the right.</Text>
        <CliCommand>{"echo asd > text.txt"}</CliCommand>
        <Text>the <b>{'>>'}</b> is used the <b>append</b> the stdout of the left command to 
          the file or whatever is on the right.</Text>
        <CliCommand>{"echo asd >> text.txt"}</CliCommand>
        <Text>the <b>{'<'}</b> is used the <b>receive</b> the standard <b>input</b> of 
          the right-sided command to the file or whatever is on the left. So backwards!</Text>
        <CliCommand>{"grep hello < text.txt"}</CliCommand>
        <Text>Here, we are not using the text.txt as the destination where the text is 
          going, but rather where the information is coming from. We are using the 
          insides of the file and sending it to the grep command.</Text>
        <Text>the <b>{'2>&$1<'}</b> is used the <b>receive</b> the standard <b>input</b> of 
          the right-sided command to the file or whatever is on the left. So backwards!</Text>
        <CliCommand>{"<command> 2>&$1 /var/log/syslogs"}</CliCommand>
      </Segment>

      <Segment title="Creating a new server">
        <Text>We might need to create a new nginx server that listens for a separate 
          url, for example, if we created a new record of type A that has a url that
          starts with www. or blog. or whatever.</Text>
        <CliCommand>{"sudo vi /etc/nginx/sites-enabled/www.<domain>"}</CliCommand>
        <CodeSnippet filename="/etc/nginx/sites-enabled/www.<domain>">
          {"server {"}
          {"  listen 80;"}
          {"  listen [::]:80;"}
          {""}
          {"  server_name www.<domain>;"}
          {""}
          {"  location / {"}
          {"    proxy_pass http://localhost:3000;"}
          {"  }"}
          {"}"}
        </CodeSnippet>
        <Text>And don't forget to change the nginx.conf file so that nginx knows
          that it should listen with that server too.</Text>
        <CliCommand>sudo service nginx restart</CliCommand>
      </Segment>

      <Segment title="Enabling websockets in our server">
        <Text textAlign="center">So... you wanna use <Link onClick={onOpen}>websockets?</Link></Text> 
      </Segment>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent minW="50rem">
          <Segment title="Websockets">
            <ModalBody>
              <Text>Websockets are fun, they allow us to have a safe and consistent stream of data.</Text>
              <Text>We can upgrade the connection that goes through our nginx when we pass it towards 
                a server, like the NodeJs one</Text>
              <CodeSnippet filename="/etc/nginx/sites-enabled/www.your_domain">
                {'  ...'}
                {'  location / {'}
                {'    proxy_set_header Upgrade $http_upgrade;'}
                {'    proxy_set_header Connection "upgrade";'}
                {'    proxy_pass http://127.0.0.1:3000;'}
                {'  }'}
                {'}'}
              </CodeSnippet>
              <Text>You should do the same on the other file, the one that does not have www. before 
                the domain</Text>
              <Text>We are going to create the server</Text>
              <Text>First, install express.</Text>
              <CliCommand>npm i express</CliCommand>
              <CodeSnippet filename="/var/www/app/index-ws.js">
                {'const express = require("express");'}
                {'const server = require("http").createServer();'}
                {'const app = express();'}
                {''}
                {'app.get("/", (req, res) => {'}
                {'  res.sendFile("index.html", {root: __dirname});'}
                {'});'}
                {'server.on("request", app);'}
                {'server.listen(3000, () => {'}
                {'  console.log("Listening on port 3000");'}
                {'});'}
              </CodeSnippet>
              <Text>Let's analize it line by line.</Text>
              <Text>When we create the '<b>express</b>' variable from <i>require("express")</i>, we
                are bringing a function. Which we will call and store the App object returned by it.</Text>
              <Divider my="1rem" />
              <Text>
                The <b>get</b> method on the app will check if the path in the request is the same as the string
                passed as a first argument and if it is, the function will execute. In this case, we are checking 
                for the homepage, in "/".
              </Text>
              <Divider my="1rem" />
              <Text>
                The <b>server.on()</b> method takes an event we will listen for and the second argument points to
                where we will redirect the request to. The server.listen() function is pretty self explainatory.
              </Text>
              <Divider my="1rem" />
              <Text>Now, let's use a library to simplify web sockets. It's called ws.</Text>
              <CliCommand>npm i ws</CliCommand>
              <Text>And we will bring the WebSocketServer class from the ws library and create our own instance of it.</Text>
              <CodeSnippet filename="/var/www/app/index-ws.js">
                {`...`}
                {`/* Web Sockets Begin */`}
                {`const WebSocketServer = require("ws").Server;`}
                {`const wss = new WebSocketServer(...);`}
              </CodeSnippet>
              <Text>
                To create an instance of a WebSocketServer, we might need to pass some options. In this case its the server
                that we previously created, the one that handles our connections passed from nginx that we will pass inside
                the options object that it can receive.
              </Text>
              <CodeSnippet filename="/var/www/app/index-ws.js">
                {`const server = require("http");`}
                {`...`}
                {`const wss = new WebSocketServer({ server: server });`}
              </CodeSnippet>
              <Text>
                And, we will make our new web socket server listen for any 'connection' events, and we'll log how many
                people are connected into our server along with a greeting, we are also going to use the broadcast method
                on the web socket server to avoid having to loop over all the clients connected in order to send them a message.
              </Text>
              <CodeSnippet filename="/var/www/app/index-ws.js">
                {`...`}
                {`const wss = new WebSocketServer({ server: server });`}
                {``}
                {`wss.on("connection", (ws) => {`}
                {`  const numClients = ws.clients.size;`}
                {"  console.log(`Clients connected: ${numClients}`);"}
                {"  wss.broadcast(`There are ${numClients} visitors.`);"}
                {`});`}
              </CodeSnippet>
              <Text>So far so good! Now let's deal with the states of our connection.</Text>
              <CodeSnippet filename="/var/www/app/index-ws.js">
                {`...`}
                {`wss.on("connection", (socketConn) => {`}
                {"  ..."}
                {"  if (socketConn.readyState === socketConn.OPEN) {"}
                {"    socketConn.send('Welcome to the server!');"}
                {"    wss.broadcast(`Users connected: ${numClients});"}
                {`  }`}
                {"  ws.on('close', () => {"}
                {"    console.log('Somebody left!');"}
                {"    wss.broadcast(`Somebody left! It was...${ws});"}
                {`  });`}
                {`});`}
              </CodeSnippet>
              <Text>Unfortunately, the broadcast function does not exist yet, so let's create it.</Text>
              <CodeSnippet filename="/var/www/app/index-ws.js">
                {`...`}
                {`wss.on("connection", (socketConn) => {`}
                {"  ..."}
                {`});`}
                {"wss.broadcast = function broadcast(data) {"}
                {"  wss.clients.forEach((client) => {"}
                {"    client.send(data);"}
                {"  };"}
                {"}"}
              </CodeSnippet>
              <Text>Great! But this doesn't work yet. We have not yet made a way to actually stablish a connection from
              the client. For that, we need to use some html (yay!)</Text>
              <CodeSnippet filename="/index.html">
                {`<html>`}
                {`<script>`}
                {`  let ws;`}
                {`  const protocol = window.location.protocol === "https:" ? "ws:" : "ws:";`}
                {`</script>`}
                {`</html>`}
              </CodeSnippet>
              <Text>We are going to use web socket secure (wss) if we are using https and regular web socket if its a 
                regular http connected page.</Text>
              <CodeSnippet filename="/index.html">
                {`<script>`}
                {`  let ws;`}
                {`  const protocol = window.location.protocol === "https:" ? "ws:" : "ws:";`}
                {"  ws = new WebSocket(`${protocol}//${window.location.host}`);"}
                {`</script>`}
              </CodeSnippet>
              <Text>We are creating a web socket connection to the specified url with the correct protocol.</Text>
              <Text>And we are going to make our ws listen for incoming messages</Text>
              <CodeSnippet filename="/index.html">
                {`<script>`}
                {`  ...`}
                {"  ws.addEventListener('message', (event) => {"}
                {"    console.log(event.data);"}
                {"  });"}
                {`</script>`}
              </CodeSnippet>
            </ModalBody>
          </Segment>
        </ModalContent>
      </Modal>

      <Segment title="HTTPS">
        <Text>Finally we are going to secure our connection, for that we will use certbot</Text>
        <CliCommand>sudo snap install core; sudo snap refresh core</CliCommand>
        <Text>Make sure certbot is not installed</Text>
        <CliCommand>sudo apt remove certbot</CliCommand>
        <Text>Install certbot</Text>
        <CliCommand>sudo snap install --classic certbot</CliCommand>
        <Divider my="1rem" />
        <Text>Now, we'll create a logical link between the snap binary for certbot and
          the binaries the user has access to.</Text>
        <CliCommand>sudo ln -s /snap/bin/certbot /usr/bin/certbot</CliCommand>
        <Text>And we let it do it's magic on the nginx server.</Text>
        <CliCommand>sudo certbot --nginx</CliCommand>
        <Text>We also can check if a renewal would work or if it will find an issue with</Text>
        <CliCommand>sudo certbot renew --dry-run</CliCommand>
        <Text>And we need to allow https access to our server</Text>
        <CliCommand>sudo ufw allow https</CliCommand>
      </Segment>

      <Segment title="Load Balancing" id="load_balancing">
        <Text>In order to add load balancing to an nginx web server that proxies towards our 
          docker images, we have to make some changes to our nginx.conf file.</Text>
        <Text>We need to create an upstream for our collection of ports that point toward 
          the docker images, in my case, they are localhost:8085 and :8086</Text>
        <CodeSnippet filename="/etc/nginx/nginx.conf">
          {"..."}
          {"http {"}
          {"  upstream node_backend {"}
          {"    server 127.0.0.1:8085;"}
          {"    server 127.0.0.1:8086;"}
          {"  }"}
          {"}"}
        </CodeSnippet>
        <Text>Now, with the upstream set up, we just need to change the proxies to go towards it</Text>
        <CodeSnippet filename="/etc/nginx/sites-enabled/yesusblog.info">
          {"..."}
          {"server_name yesusblog.info"}
          {""}
          {"location / {"}
          {"  proxy_set_header Upgrade $http_upgrade;"}
          {'  proxy_set_header Connection "upgrade";'}
          {"  proxy_pass http://node_backend"}
          {"}"}
        </CodeSnippet>
        <Text>If you have two server files, like a different one for 'www.' then, add it there too</Text>
        <Text>Nginx will automatically load balance the requests coming in with the Round-Robin approach</Text>
      </Segment>

    </VStack>
  )
}




