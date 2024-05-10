import { Text, VStack } from "@chakra-ui/react";
import { MainHeader } from "@/components/headers/MainHeader"
import { Segment } from "@/components/segments/Segment";

export default function Laravel () {
  return (
    <VStack>
      <MainHeader 
        title="Laravel"
        sub_title="A PHP Framework for Web Artisans"
      />
      <Segment 
        color="#EE4432"
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
