import { Text, VStack } from "@chakra-ui/react";
import { MainHeader } from "@/components/headers/MainHeader"
import { Segment } from "@/components/segments/Segment";

export default function Go() {
  return (
    <VStack>
      <MainHeader 
        title="Go"
        sub_title="A language to develop backends(sometimes)"
      />
      <Segment title="Creating a module">
        <Text>Creating a module for your go project is pretty simple</Text>
      </Segment>
    </VStack>
  )
}
