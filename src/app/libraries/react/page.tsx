import { Box, Divider, HStack, ListItem, OrderedList, Text, VStack } from "@chakra-ui/react";
import { MainHeader } from "@/components/headers/MainHeader"
import { Segment } from "@/components/segments/Segment";
import CodeSnippet from "@/components/islands/CodeSnippet";
import { OptionPicker } from "@/components/forms/OptionPicker";
import { Const } from "@/components/code-components/Const";
import { UseState } from "@/components/code-components/UseState";
import GenericFunction from "@/components/code-components/GenericFunction";
import CodeBlock from "@/components/code-components/Codeblock";
import ComponentCall from "@/components/code-components/ComponentCall";
import GenericFunctionComponent from "@/components/code-components/GenericFunctionComponent";
import ReturnStatement from "@/components/code-components/ReturnStatement";
import { Token } from "@/common/types/globalEnums";

export default function React() {
  const bestPlayOptions = [
    "Choose another framework",
    "Choose a different career path",
    "Put every other component on a "
  ]
  return (
    <VStack mb="150px">
      <MainHeader title="React" sub_title="A JavaScript library for building user interfaces" />
      <Segment  title="React Performance" snippet="Thanks to Frontend Masters for giving my a discount! :D"
        width="50rem"
      >
        <Text>Basically I'm going to learn (in the Frontend Masters course I'm doing)
          about how to spot performance issues and at the same time probably learn how to 
          use the things that allow for performance optimizations in some decent way.</Text>
        <HStack>
          <Segment title="Re Renders" width="300px">
            <Text>React has a single thing in mind in order to re render the virtual dom.
              In order for a re render to be executed, a parent node needs to change.
              This can happen through state or a useReducer (state is effectively an abstraction
              on useReducer). This parent change will trigger all of its children to re render.</Text>
          </Segment>
          <Segment width="300px">
            <Text>The number of re-renders are reduced in the case when multiple state changes happen
              at the same time. This could (and will) happen in any application and React has it 
              covered somewhat.</Text>
            <Divider my="15px" />
            <Text>React does not re-render automatically upon state change, instead, it queues those updates.
              This changes will be flushed when the event handler or
              lifecycle method finishes.</Text>
          </Segment>
        </HStack>
        <Segment title="Lifting State Up?" width="300px">
          <Text>One of the first things that we are teached when we are learning react is that we should
            always try and lift state up and then pass it down as props to child components.</Text>
          <Text>But lift state high enough and re-renders will cause many components that have nothing to
            do with the changed state to re-render. Causing unnecessary overhead.</Text>
        </Segment>
      </Segment>
      <Box bg="black.200"
        width={{base: "100px", md: "300px"}}
        borderRadius="4px"
        padding="25px"
        position="absolute"
        left="-17.5rem"
        top="18rem"
        _hover={{

        }}
      >
        <Text textAlign="center">There are three phases in the lifecycle of a React page render.</Text>
        <OrderedList color="#ddd" margin="15px">
          <ListItem>Render Phase</ListItem>
          <ListItem>Commit Phase</ListItem>
          <ListItem>Cleanup Phase</ListItem>
        </OrderedList>
      </Box>
      <Segment title="Possible Performance Optimizations" width="50rem">
        <Text>When creating state, a common pattern is to use the value returned by a function to calculate 
        the initial value of the state. There is problem with this, and it has to do with re-renders and
        how React treats regular functions. Let's see what I mean.</Text>
        <CodeSnippet>{`const [name, setName] = useState(getRandomName)`}</CodeSnippet>
        <Text>After the initial renders, every following render will also call the function. Thus
          creating unnecessary calls.</Text>
        <Divider my="1rem" />
        <Text>What should be done instead is: </Text>
        <CodeSnippet>{`const [name, setName] = useState(() => getRandomName)`}</CodeSnippet>
        <Text>This way, Javascript will now not to call the function after the first render.</Text>
        <Text>But you might be wondering if React is actually using the randomly generated value
          that it receives after every render in the first example, well, Javascript is actually
          getting the value after each render, which explains the obliteration of performance, but 
          React knows not to use the value after the first render, because that is how it state and 
          hooks in general tend to work.
        </Text>
      </Segment>
      <Segment title="Pushing State... Down?" width="50rem">
        <Text>Yes, you <s>heard</s> read that right.</Text>
        <Text>Since we know that components re-render on every state change, and we know inputs in React
        work using State changes to update the UI, we could safely say that 90% of the time we should have
        the least amount of elements in the same level as the inputs.</Text>
        <Text>Take the following code: </Text>
        <CodeSnippet>
          {`const [input, setInput] = useState(() => getDefaultInput())\n`}
          {`return (\n`}
          {`  <InputField setInput={setInput}>\n`}
          {`)\n`}
        </CodeSnippet>
        <Text>Imagine we had 13 other components being rendered in that same component next to the
         {` <InputField> `}component, what would we do then? Just let everything be re-rendered EVERY TIME 
          the input receives a change (very often) because our own stupidity put the state in that place? No.
        </Text>
        <Text>It would make much more sense to move the state to the input.</Text>
      </Segment>
      <Segment title="Isolating the Bad Apple" width="50rem">
        <Text>Imagine this, we have four components that make up our application.</Text>
        <Text>But the fourth one is very expensive, suppouse it is the only one of all 
        of them that takes 5 times more to render, thus making everything else around it
        slower.</Text>
        <CodeSnippet>
          {`export function App() {\n`}
          {`  const [name, setName] = useState("")\n`}
          {`  return (\n`}
          {`    <Component />\n`}
          {`    <Input updateName={() => setName()} />\n`}
          {`    <Expensive Component />\n`}
          {`    <Component />\n`}
          {`  )\n`}
          {`}\n`}
        </CodeSnippet>
        <CodeBlock>
          <Const indent={0} name="name" value="rob" />
          <Const 
            indent={0}
            name="[name, setName]"
            value=<UseState baseValue={''} />
          />
          <Const 
            indent={0}
            name="[userName, setUserName]" 
            value=<GenericFunction baseValue={'William'} functionCall={"useState"} />
          />
          <UseState baseValue="Hello wowlrd!!" />
        </CodeBlock>
        <Text>Well, what would be the best play here in order to reduce extra 
        re-renders?</Text>
        <OptionPicker options={bestPlayOptions} />
        <Divider my="1rem"/>
        <Text >The refactor is needed because a re-render of the expensive component
        is caused by the state change in Application, but since the state is not needed by 
        the expensive component, we can safely put everything that is not our expensive component
        lower in the tree.</Text>
        <Divider my="1rem" />
        <Text>We are basically putting everything that is not our exp. component into a bag and
        storing in that bag the state that is currently causing the re-render.</Text>
        <Divider my="1rem" />
        <Text>But now, how does this look?</Text>
        <Text>Before: </Text>
        <CodeBlock>
          <GenericFunctionComponent name="Application">
            <Const 
              indent={1}
              name="[userName, setUserName]" value={
              <UseState baseValue="nil" />
            } />
            <ReturnStatement indent={1}>
              <ComponentCall indent={2} name="Label name={userName}" />
              <ComponentCall indent={2} name="Input handleChange={() => serUserName()}" />
              <ComponentCall indent={2} name="ExpensiveComponent" />
            </ReturnStatement>
          </GenericFunctionComponent>
        </CodeBlock>
        <Text>After: </Text>
        <CodeBlock>
          <GenericFunctionComponent name="Application">
            <ReturnStatement indent={1}>
              <ComponentCall indent={2} name="UserNameInput" />
              <ComponentCall indent={2} name="ExpensiveComponent" />
            </ReturnStatement>
          </GenericFunctionComponent>
        </CodeBlock>
        <Divider my="1rem" />
        <Text>Now the state is handled inside the component that we put down
          in the component tree and thus it's state is no longer an issue for 
          our expensive component!</Text>
      </Segment>

      <Segment title="Rendering expensive things in heavy re-render environments"
        width="50rem"
      >
        <Text>Well! We found ourselves an issue. What if we need to render the
        expensive component right in between where a lot of re-renders might be happening?</Text>
        <Divider my="1rem" />
        <Text>Don't worry! React will not take the children rendered inside components as 
          being in the same level, <b>children do not count as siblings of other
          components.</b></Text>
        <Divider my="1rem" />
        <Text>React will only take into consideration the component where the (in this
          case expensive) component is defined, not where it is ending up. </Text>
        <Divider my="1rem" />
        <Text>Even if it is being passed as a child to another component and
          rendered inside of it, the state of the component where is it being rendered
          will <b>NOT</b> affect the expensive component.</Text>
      </Segment>
      <Segment title="Memoization" width="50rem">
        <Text>It should not be our first priority to use memoization when the problem
          can be solved with a null-weighted solution like a refactorization of component
          hierarchy.</Text>
        <Text><b>But!</b> our components will not always remain the way they currently are,
          in the future they might and most likely wil change, have props and functionality
          added, so using memoization on a component is not a bad idea in most cases.</Text>
      </Segment>
      <Segment title="Things are not always equal" width="50rem">
        <Text>In the wonderful land of Javascript, things that might seem equal are not.</Text>
        <Text>For example, two functions that do the same thing are not the same thing and 
        therefore are <b>NOT</b> equal.</Text>
        <Text>This has implication for re-renders, since sometimes we re-create functions on every
        render and we pass those functions to components. And if memoizing a components checks that 
        the props passed to a component are equal...</Text>
        <CodeBlock>
          <GenericFunctionComponent name="Application">
            <Const indent={1} name="[state, setState]" value={
              <UseState type={Token.STRING} baseValue="asd" />
            } />
          </GenericFunctionComponent>
        </CodeBlock>
        <Text>But what do we do if we are creating functions and we want to create functions that
          persist in through renders so they don't unnecessarily re-render components they are
          passed to?!</Text>
        <Divider my="1rem" />
        <Text>Give a warm welcome to...</Text>
      </Segment>
      <Segment title="useCallback( )!" width="50rem">
        <Text>useCallback gives us the ability to wrap a function so that it remains as the
          same location in memory through renders as long as a certain variable remains 
          unchanged.</Text>

        <CodeBlock>
          <GenericFunctionComponent name="Application">
            <Const name="[item, addItem]" indent={1} value={<UseState type={Token.VAR} baseValue="('/n) => {

              }" />} />
            <ReturnStatement indent={1}>
              <ComponentCall indent={2} name="AdderComponent add={ ( ) => addItem( ) }" />
            </ReturnStatement>
          </GenericFunctionComponent>
        </CodeBlock>

        <Text>This way we can avoid having that function re-created and thus causing the
        passing of that function to a component to cause a re-render of said component.</Text>
        <CodeBlock>
          <GenericFunctionComponent name="Application">
            <Const indent={1} name="addItems" />
            <Const indent={1} name="[items, setItems]" value={
              <UseState baseValue="asd" />
            } />
            <ReturnStatement indent={2}>
              <ComponentCall name="ItemsList" indent={3} />
            </ReturnStatement>
          </GenericFunctionComponent>
        </CodeBlock>
      </Segment>
    </VStack>
  )
}
