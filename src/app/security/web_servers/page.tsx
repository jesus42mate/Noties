import { CliCommand } from "@/components/code-components/CliCommand";
import MainHeader from "@/components/headers/MainHeader";
import { Segment } from "@/components/segments/Segment";
import { Divider, Text, VStack } from "@chakra-ui/react";

export default function Web_servers() {
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

    </VStack>
  )
}
