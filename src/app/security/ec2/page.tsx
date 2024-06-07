import { CliCommand } from "@/components/code-components/CliCommand";
import MainHeader from "@/components/headers/MainHeader";
import { Segment } from "@/components/segments/Segment";
import { Divider, Text, VStack } from "@chakra-ui/react";

export default function Ec2() {
  return (
    <VStack>
      <MainHeader 
        title="Securing your EC2 server" 
        sub_title="Guidelines on securing an EC2 AWS instance"
      />
      <Segment title="How we do things here">
        <Text>
          When using an EC2, the keys work a little bit different than what you expect
        </Text>
        <Text>
          Instead of having both public and private keys stored on your machine, you
          only store the private key as a <b>.pem</b> file and the public key is stored
          in the EC2 instance.
        </Text>
        <Divider my="1rem" />
        <Text>
          The key can be created on the amazon console and it will download the file to 
          your browser, this is the only time you can save the file, and I recommend you
          save the key inside the <b>.shh</b> folder.
        </Text>
        <Text>
          Now, it's a good practice to change the permission on the file so that only your 
          user can read and write the file.
        </Text>
        <CliCommand>{"chmod 400 <key-pair-name>.pem"}</CliCommand>
      </Segment>
      <Segment title="Creating a new user">
        <Text>
          Amazon has a slightly different way than what we are expected to
          create a new user. First create the user.
        </Text>
        <CliCommand>{"sudo adduser <username> --disabled-password"}</CliCommand>
        <Text>
          The --disabled-password flag is optional. But it will make entering into the
          server as that user with a password and user combinaton impossible, making it more
          secure
        </Text>
        <Divider my="1rem" />
        <Text>
          Now, let's switch into that user.
        </Text>
        <CliCommand>{"sudo su - <username>"}</CliCommand>
      </Segment>
      <Segment title="It's YOUR .ssh folder!">
        <Text>
          Now we need to create an .ssh folder and make it so that only our newly created
          user can edit it.
        </Text>
        <CliCommand>cd ~/</CliCommand>
        <CliCommand>mkdir .ssh</CliCommand>
        <CliCommand>chmod 700 .ssh</CliCommand>
        <Text>
          Now, we can create the <b>authorized_keys</b> file and save the public 
          key that is authorized to enter the server.
        </Text>
        <CliCommand>vim .ssh/authorized_keys</CliCommand>
        <Text>You can use vim or nano, but vim is for the cool boys.</Text>
      </Segment>
    </VStack>
  )
}
