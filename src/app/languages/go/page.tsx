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
      <Segment 
        title="Basics"
      >
        <Text
          color="#ddd"
          padding="4px"
        >The following are the basics.</Text>
      </Segment>
    </VStack>
  )
}
