import { CliCommand } from "@/components/code-components/CliCommand";
import MainHeader from "@/components/headers/MainHeader";
import CodeSnippet from "@/components/islands/CodeSnippet";
import { Segment } from "@/components/segments/Segment";
import { Link, Text, VStack } from "@chakra-ui/react";

export default function Docker() {
  return (
    <VStack mb="10rem">
      <MainHeader 
        title="Docker"
        sub_title="Run it anywhere"
      />
      <Segment title="Creation of a Dockerfile">
        <Text>Dockerfile's need a few things, let's disect it.</Text>
        <Text>The first thing is the version of a docker image that will be automatically downloaded once we 
          run the dockerfile. This serves as the base of our container.</Text>
        <Text>Next we'll make a directory where we will store our application and change the owner of everything in
          the app to the node user.</Text>
        <CodeSnippet filename="/app/Dockerfile">
          {"FROM node:22-alpine3.19"}
          {"RUN mkdir -p /home/node/app/node_modules"}
          {"RUN chown -R node:node /home/node/app"}
        </CodeSnippet>
        <Text>After that we'll set the working directory to our app directory.</Text>
        <Text>Everything we execute now will have this working dir as the location.</Text>
        <Text>We will copy the contents from the package-lock and package .json files
          into the app dir in the docker container.</Text>
        <CodeSnippet filename="/app/Dockerfile">
          {"..."}
          {"WORKDIR /home/node/app"}
          {"COPY package*.json ./"}
        </CodeSnippet>
        <Text>We'll set the user in the container as node</Text>
        <Text>We'll set the user in the container as node and install the dependencies
          that we have in the package-lock and package.json</Text>
        <CodeSnippet filename="/app/Dockerfile">
          {"..."}
          {"USER node"}
          {"RUN npm install"}
        </CodeSnippet>
        <Text>And we will also copy the contents from where the Dockerfile is being ran
          into the work dir of the created Docker container.</Text>
        <Text>Also we'll expose the containers port 3000</Text>
        <Text>We'll finish by running the server.</Text>
        <CodeSnippet filename="/app/Dockerfile">
          {"..."}
          {"COPY --chown=node:node . ."}
          {"EXPOSE 3000"}
          {"CMD ['node', 'app.js']"}
        </CodeSnippet>
      </Segment>

      <Segment title="Creating & Running a Docker Image">
        <Text>You might need sudo for these commands depending on how you installed docker</Text>
        <Text>After we created the image with</Text>
        <CliCommand>{"docker build -t <name> .   <---- dot is important!"}</CliCommand>
        <Text>We can look at the created images with</Text>
        <CliCommand>docker image ls</CliCommand>
        <Text>And we can run it with.. </Text>
        <CliCommand>{"docker run -d -p 8085:3000 <image_name>"}</CliCommand>
        <Text>If you wanna add a name to make it more specific, do</Text>
        <CliCommand>{"docker run -d -p --name <name> 8085:3000 <image>"}</CliCommand>
        <Text>the -d flag stands for detached, so that our container can run on the background and
          not on an interactive way.</Text>
        <Text>The -p flag is used to specify the port where our docker container is listening in 
          our computer. It's in the format of {"<localhost_port>:<container_port>"}</Text>
      </Segment>

      <Segment title="Load Balancing">
        <Text>If you want to learn how to balance your requests into multiple instances if your 
          application, go to <Link href="/security/web_servers/#load_balancing">Load Balancing</Link></Text>
      </Segment>
      
      <Segment title="Volumes" id="volumes">
        <Text>The time to create or use a volume is upon the creation of a container, which is the moment
          when we run it.</Text>
        <CliCommand>docker run -d -v my_pgdata:/var/lib/postgresql/data</CliCommand>
        <Text>The -v flag is shorthand for --volume and it will create a volume if one has not been found 
          inside /var/lib/docker/volumes/</Text>
        <Text>But take into account that the place where we store the volume's data is flexible.</Text>
        <Text>Volumes get stored in</Text>
      </Segment>

    </VStack>
  )
}
