'use client'
import { Token } from "@/common/types/globalEnums";
import { navigateToElement } from "@/common/types/helpers";
import CodeBlock from "@/components/code-components/Codeblock";
import { Const } from "@/components/code-components/Const";
import { Import } from "@/components/code-components/Import";
import InlineText from "@/components/code-components/InlineText";
import MainHeader from "@/components/headers/MainHeader";
import CodeSnippet from "@/components/islands/CodeSnippet";
import GenericModal from "@/components/modals/GenericModal";
import { Segment } from "@/components/segments/Segment";
import { Button, Divider, HStack, ListItem, Text, UnorderedList, VStack, useDisclosure } from "@chakra-ui/react";


export default function Redux () {
  const { isOpen, onOpen, onClose } = useDisclosure() 
  return (
    <VStack>
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
      <Segment title="Initial State">
        <Text>Our initial state may look something like this:</Text>
        <CodeBlock>
          <Const name="initialState" indent={0} value="{ counter: 0 }" />
        </CodeBlock>
        <Text>But actions will be performed on the actual current state of our application, not on the initial state.</Text>
      </Segment>
      <Segment title='"But what is a Reducer?"'>
        <Text>Great question.</Text>
        <Text mb="0.3rem">A Reducer is effectively a function that takes</Text>
        <UnorderedList>
          <ListItem ml="1.5rem" color="white.300">The current state of our app  (which is a JS object)</ListItem>
          <ListItem ml="1.5rem" color="white.300">A action that should happen   (which is a JS object)</ListItem>
        </UnorderedList>
        <Text mt="1rem">
          And returns the new state of the world after the action that happened took place.
          Which means that reducers need to return a state, they consume the previous state and 
          return the new one.
        </Text>
        <Divider my="1rem" />
        <Text>
          It is important to note that the object which the action is made of always has a type key which specifies
          what action should take place, this will then be matched in the reducer in order the affect the state.
        </Text>
        <CodeBlock>
          <Const name="incrementAction" indent={0} value="{ type: 'INCREMENT' }" />
        </CodeBlock>
        <Text>
          The action can also receive a <b>payload</b> which can be an object or a single element that specifies
          how the action is effected, having a payload of 5 will mean the 'INCREMENT' action should be of 5 instead
          of the default value.
        </Text>
        <Text>But what about the reducer? How does it look?</Text>
        <CodeSnippet>
          {`export const reducer = (state, action) => {`}
          {`  if (action.type === "INCREMENT") { `}
          {`     return { value: state.counter += 1 }`}
          {`  } `}
          {`}`}
        </CodeSnippet>
        <Text>
          Notice how we are always returning a new object that represents the new state of our application.
        </Text>
        <Divider my="1rem" />
        <Text>
          We might also need to check of the action has a payload, currently we are just executing the same change
          on every action, but that might not be the case, sometimes state changes are variable, so a payload is used.
        </Text>
        <CodeBlock>
          <Const name="incrementAction" indent={0} value="{ type: 'INCREMENT', payload: 5 }" />
        </CodeBlock>
        <CodeSnippet>
          {`const reducer = (state, action) => {`}
          {`  if (action.type === "INCREMENT") { `}
          {`     if (action.payload != undefined) {`}
          {`       return { value: state.counter += payload }`}
          {`     }`}
          {`     return { value: state.counter += 1 }`}
          {`  } `}
          {`}`}
        </CodeSnippet>
        <Divider my="1rem" />
        <Text>
          There is one more consideration to have. When we create the store we need to get the 
          initialState to be the store, so, if there is no initialState passed to our reducer 
          by the time it is called in the dispatch function, then we use a default value 
          of initialState. 
        </Text>
        <Divider my="1rem" />
        <Text>
          So, if our reducer receives no state, then we use the initialState, since 
          after the initialState is used, our reducer will always receive a state. But! there 
          is another option, a more older way of doing it. We can pass the initialState to the
          createStore() function. But the first way is generally better.
        </Text>
      </Segment>
      <Segment title="Action Creators" id="actionCreators">
        <Text>Action creators are a simple design pattern for building the actions instead of writing them by hand</Text>
        <CodeSnippet>
          {`const increment = (ammount) => ({ type: "INCREMENT", payload: ammount });`}
        </CodeSnippet>
        <Text>
          This way we remove possible errors when typing the type of the action, you just call 
          the function with the ammount that you want it to increment and voila, you have your action built!
        </Text>
        <Divider my="1rem" />
        <Text>After creating the action, we can just pass it to a dispatch with the value we want.</Text>
        <CodeSnippet>
          {`store.dispatch(increment(5))`}
        </CodeSnippet>
      </Segment>
      <Segment title="Dispatch">
        <Text>The way in which we get our action to reach the reducer is through a dispatch function.</Text>
        <Text>
          We use the <b>store.dispatch()</b> function and we pass it the reducer in order to update 
          the store. The <b>dispatch</b> function uses <b>store.getState()</b> to use the current
          state of the store and applies the changes on it using the reducer. When the reducer returns the
          newly created state, dispatch swaps the previous state for the new one.
        </Text>
        <CodeSnippet>
          {`const store = createStore()`}
          {`store.dispatch(increment)`}
        </CodeSnippet>
      </Segment>

      <Segment title="Subscribers">
        <Text>
          Now we'll see how we can get our components to subscribe to the changes in the store, this way only the
          parts need to re-render will re-render on store state changes.
        </Text>
        <CodeSnippet>
          {'const subscriber = () => console.log(I\'m subscribed!, store.getState())'}
        </CodeSnippet>
        <Text>This subscriber is just a function that uses a value in the store, like most subscribers ever.</Text>
        <CodeSnippet>
          {'store.subscribe(subscriber)'}
        </CodeSnippet>
        <Text>Now, every time there is a change in the store, our subscribed component will re-render.</Text>
      </Segment>
      
      <Segment title="BindActionCreators">
        <Text display="inline">This helper method is useful when we want a certain group of </Text>
        <Text 
          display="inline"
          color="orange"
          _hover={{cursor: "pointer", color: "red.soft"}} 
          onClick={() => navigateToElement("actionCreators")}
        >
          action creators
        </Text>
        <Text display="inline"> to be bound to a dispatch method so that each time one of the actionCreators 
          is called, it will automatically be dispatched instead of returning the action.</Text>
        <CodeSnippet>
          {'const berry: Fruit = new Fruit(berry);'}
          {'const actions = bindActionCreators({ say, eat }, store.dispatch);'}
          {'actions.pray("hello world!");'}
          {'actions.eat(berry);'}
        </CodeSnippet>
        <Text>This method is not very used anymore, if you need more info about it, use the internet.</Text>
      </Segment>

      <Segment title="Combine Reducers">
        <Text>
          Now we are going to deal with the first real problem that we get whenever we create even the
          most simple of applications, and that is what happens when we have something like this:
        </Text>
        <CodeSnippet>
          {''}
          {'const initialState = {'}
          {'  users: ['}
          {'    { name: "Mark", tasksCompleted: 12 },'}
          {'    { name: "John", tasksCompleted: 5 },'}
          {'  ],'}
          {'  tasks: ['}
          {'    "catch a dolphy with bear hands", '}
          {'    "eat salmon on a tuesday", '}
          {'  ],'}
          {'}'}
          {''}
          {'const ADD_TASK = "ADD_TASK"'}
          {'const REMOVE_TASK = "REMOVE_TASK"'}
          {''}
          {'const add_task = (taskName: string) => ({'}
          {'  return { type: ADD_TASK, payload: { task: taskName }'}
          {'})'}
          {''}
          {'const reducer = (state = initialState, action) => {'}
          {'  if (action === "ADD_TASK") {'}
          {'    return {'}
          {'      ...state,'}
          {'      tasks: [,'}
          {'        ...state.tasks,'}
          {'        action.payload.task,'}
          {'      ],'}
          {'    }'}
          {'  }'}
          {'}'}
          {''}
        </CodeSnippet>
        <Text>Take a look at that reducer! Now we are talking!</Text>
        <Text>It's not even that big of an app and it's already annoying to look at!</Text>
      </Segment>
    </VStack>
  )

}
