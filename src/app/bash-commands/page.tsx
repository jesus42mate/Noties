import { CliCommand } from "@/components/code-components/CliCommand";
import MainHeader from "@/components/headers/MainHeader";
import { Segment } from "@/components/segments/Segment";
import { Divider, HStack, Text, VStack } from "@chakra-ui/react";

export default function BashCommands() {
  return (
    <VStack
    >
      <MainHeader
        title="Dope and Useful commands!"
        sub_title='cat gf.txt | grep "<3"'
      />
      <Segment 
        title="Useful commands"
        width="35rem">
        <Text>Killing a process</Text>
        <CliCommand>{'pkill <process>'}</CliCommand>

        <Text>Looking at all well known ports</Text>
        <CliCommand>{'less /etc/services'}</CliCommand>

        <Text>find syntax</Text>
        <CliCommand>{'find /var -name log'}</CliCommand>
        <Text>Where /var represents the directory were we'll be looking.</Text>
        <Text>And -name log represents the name of the file we are looking for.</Text>
        
        <Divider my="1rem" />

        <Text>To find files we do...</Text>
        <CliCommand>find /var/log -type f -name "*.log"</CliCommand>
        <Text>Because we are looking for files that end in ".log"!</Text>
        <Text>And to find directories.. </Text>
        <CliCommand>find / -type d -name log</CliCommand>
        <Text>Apply sudo to the last command you used.</Text>
        <CliCommand>sudo !!</CliCommand>

        <Divider my="1rem" />

        <Text>To look at the processes (and finding one)</Text>
        <CliCommand>ps aux</CliCommand>
        <CliCommand>ps aux | grep node</CliCommand>
      </Segment>
      <HStack>
      </HStack>
    </VStack>
  )
}
