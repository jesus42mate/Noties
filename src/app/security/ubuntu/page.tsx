import { CliCommand } from "@/components/code-components/CliCommand";
import MainHeader from "@/components/headers/MainHeader";
import { Segment } from "@/components/segments/Segment";
import { Divider, Text, VStack } from "@chakra-ui/react";

export default function Ubuntu() {
  return (
    <VStack>
      <MainHeader title="Security on Ubuntu 24.04" sub_title="Important guidelines to secure a server" />
      <Segment title="Creating a user with sudo priviledges">
        <Text>Create the user </Text>
        <CliCommand>{"adduser <your_username>"}</CliCommand>
        <Text>Add user to "sudo" group </Text>
        <CliCommand>{"usermod -aG sudo <your_username>"}</CliCommand>
        <Text>Switch to your user </Text>
        <CliCommand>{"su <your_username>"}</CliCommand>
        <Text>Check for sudo access </Text>
        <CliCommand>{"sudo cat /var/log/auth.log | grep <your_username>"}</CliCommand>

      </Segment>
      <Segment title="Authorized Keys?">
        <Text>
          It's very common to have a file called <b>authorized_keys</b> inside<b> /home/{"<username>"}/.ssh/ </b>
          and upon server creation there should not be one most of the times. But it's your responsability
          to create one in order to allow specific connections to certain secure devices.
        </Text>
        <Divider my="1rem" />
        <Text>This file is a collection of <b>public keys</b> that are authorized to ssh into the server.</Text>
      </Segment>
      <Segment title="SSH Permissions">
        <Text>
          Changing the permission of the authorized_keys file (inside the .ssh directory) is important 
          so that we don't allow strangers trying to break into our server to modify who can and cannot ssh
          into the server
        </Text>
        <CliCommand>sudo cat /var/logs/auth.log</CliCommand>
        <Segment title="Securing the entry" width="auto">
          <Text>
            It's important to change the permissions of the authorized_keys file so that it can only 
            be written by the who we want to (ourselves).
          </Text>
          <Text>
            We need to execute this command from our created user, not from root.
          </Text>
          <CliCommand>chmod 644 ~/.ssh/authorized_keys</CliCommand>
          <Text>
            Now we are the only ones who can write into the file, other processes can only read from it.
          </Text>
        </Segment>
      </Segment>
      <Segment title="No more root access">
        <Text>
          Root access can be dangerous, if you have a user for your server, root should never be used. It's 
          can allow bad actors to do anything and things can break easily, if you ever need root access,
          <b> sudo</b> is more than enough.
        </Text>
        <Divider my="1rem" />
        <Text>
          <b>But!</b> it can be even more dangerous to lock yourself out of your server when disabling the 
          entering to your server as root, that's why you absolutely need to have created a user beforehand 
          and giving it access to your server by adding your public_key to the authorized_keys file.
        </Text>
        <Divider my="1rem" />
        <Text>
          Now... we go into dangerous territory. We are no longer going to allow ssh'ing into the server 
          as root by modifying the sshd_config file. (Which stands for "ssh daemon configuration").
        </Text>
        <CliCommand>sudo vi /etc/ssh/sshd_config</CliCommand>
        <Text display="inline">And change the  </Text>
        <Text display="inline" color="red.soft">PermitRootLogin</Text>
        <Text display="inline"> variable to </Text>
        <Text display="inline" color="blue.function">no</Text>
        <Divider my="1rem" />
        <Text>
          After that, since the daemon is a running process and can only reset it's values upon
          initialization, we have to restart it by using
        </Text>
        <CliCommand>sudo service ssh restart</CliCommand>
        <Divider my="1rem" />
        <Text>Done! Now trying to enter the server by doing</Text>
        <CliCommand>{"ssh -i <public_key> root@<server_ip>"}</CliCommand>
        <Text>Will not work.</Text>
      </Segment>
    </VStack>
  )
}
