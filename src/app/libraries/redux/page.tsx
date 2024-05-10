'use client'
import { Token } from "@/common/types/globalEnums";
import CodeBlock from "@/components/code-components/Codeblock";
import { Const } from "@/components/code-components/Const";
import { Import } from "@/components/code-components/Import";
import InlineText from "@/components/code-components/InlineText";
import MainHeader from "@/components/headers/MainHeader";
import GenericModal from "@/components/modals/GenericModal";
import { Segment } from "@/components/segments/Segment";
import { Button, Divider, HStack, ListItem, OrderedList, Text, UnorderedList, VStack, useDisclosure } from "@chakra-ui/react";


export default function Redux () {
  const { isOpen, onOpen, onClose } = useDisclosure() 
  return (
    <VStack mb="10rem">
      <GenericModal title="createStore" isOpen={isOpen} onClose={onClose}>
        <Text>This is just a test for the modal, but should be replaced with information about
        the createStore method in the redux api.</Text>
      </GenericModal>
      <MainHeader title="Redux" sub_title="A library to manage and centralize your application's state" />
      <Segment title="Basic API">
        <VStack>
          <Text>The Redux API is relatively small, it's primary parts are: </Text>
          <HStack>
            <Segment width="15rem" margin="1rem">
              <VStack gap="0px">
                <Button variant="none" h="auto" onClick={onOpen}>
                  <InlineText
                    color="blue.function" value=" createStore" type={Token.CUSTOM} />
                </Button>
                <Text color="red.soft">compose</Text>
                <Text color="red.soft">applyMiddleware</Text>
                <Text color="red.soft">combineReducers</Text>
                <Text color="red.soft">bindActionCreators</Text>
              </VStack>
            </Segment>
            <Segment width="15rem" margin="1rem">
              <Text display="inline">In case you didn't notice </Text>
              <InlineText color="blue.function" value=" createStore" type={Token.CUSTOM} />
              <Text display="inline"> is pretty damn important. And it has inside of it another 4 methods.</Text>
              <Divider marginY="1rem" />
              <Text>Leaving us with a grand total of 9 methods! That's the entire Redux API!</Text>
            </Segment>
          </HStack>
        </VStack>
        <Divider my="1rem" />
        <CodeBlock>
          <Import what={["createStore", "compose", "applyMiddleware", "combineReducers", "bindActionCreators"]} from="redux" />
        </CodeBlock>
        <Text>But before we continue let's get a definition of what a Reducer is, because it's a very important concept to
          understand in order to create a store to save and update our world (app) state.</Text>
        <Divider my="1rem" />
      </Segment>
      <Segment title='"But what is a Reducer?"'>
        <Text>Great question.</Text>
        <Text mb="0.3rem">A Reducer is effectively a function that takes</Text>
        <UnorderedList>
          <ListItem ml="1.5rem" color="white.300">The current state of our app  (which is a JS object)</ListItem>
          <ListItem ml="1.5rem" color="white.300">A thing that happened         (which is a JS object)</ListItem>
        </UnorderedList>
        <Text mt="1rem">And returns the new state of the world after the action that happened took place. Pretty neat!</Text>
        <Divider my="1rem" />

        <CodeBlock>
          <Const name="incrementAction" indent={0} value="{ type: 'INCREMENT' }" />
        </CodeBlock>

      </Segment>
    </VStack>
  )

}
