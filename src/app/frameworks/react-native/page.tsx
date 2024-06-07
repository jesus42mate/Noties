import { Divider, Text, VStack } from "@chakra-ui/react";
import { MainHeader } from "@/components/headers/MainHeader"
import { Segment } from "@/components/segments/Segment";
import CodeSnippet from "@/components/islands/CodeSnippet";

export default function ReactNative() {
  return (
    <VStack>
      <MainHeader 
        title="React Native"
        sub_title="A comprehensive framework for building cross-platform IOS and Andriod apps."
      />
      <Segment title="Views and Mobile Development">
        <Text>Views are the building blocks of UI development in IOs and Andriod, they are small, rectangular 
          blocks that can be used to display text, images or respond to user input. Even the simplest visual 
          elements are views. Some views can contain other views, so 'it's views all the way down'</Text>
        <Divider my="1rem" />
        <Text></Text>
      </Segment>
    </VStack>
  )
}
