import { CliCommand } from "@/components/code-components/CliCommand";
import MainHeader from "@/components/headers/MainHeader";
import NoteLink from "@/components/links/note-link/NoteLink";
import { Segment } from "@/components/segments/Segment";
import { Divider, Text, VStack } from "@chakra-ui/react";

export default function Security() {
  return (
    <VStack>
      <NoteLink 
        title="On Ubuntu 24.04"
        description="Security basics on Ubuntu 24.04"
        link="/security/ubuntu"
      />
      <NoteLink 
        title="Web Servers"
        description="Web Servers on Ubuntu 24.04"
        link="/security/web_servers"
      />
      <NoteLink 
        title="EC2 Instance"
        description="AWS does things a little different"
        link="/security/ec2"
      />
    </VStack>
  )
}
