import { Divider, Text, VStack } from "@chakra-ui/react";
import { MainHeader } from "@/components/headers/MainHeader"
import { Segment } from "@/components/segments/Segment";
import CodeSnippet from "@/components/islands/CodeSnippet";

export default function Expo () {
  return (
    <VStack>
      <MainHeader 
        title="Expo"
        sub_title="Tools for building React Native Apps better and faster."
      />
      <Segment title="Basics">
        <Text>A very common way of building React Native apps is using a single or a group of packages 
          brought to us by Expo. Some of these tools are the Expo SDK, Expo Router, Expo CLI or
          Continous Native Generation.</Text>
        <Divider my="1rem" />
        <Text>An Expo Apps runtime on an IOS/Android devices happens on a native environment that 
          React Native provides, it uses a Javascript Bridge to communicate with native modules from
          that operating system</Text>
        <Text>On the web, it uses a runtime environment provided by React Native Web, which translates
          React Native components to web components.</Text>
        <Divider my="1rem" />
        <Text>To build, deploy and update your code, expo provides a CLI Tool called "EAS" which
          stands for Expo Application Services and allows us to use EAS Build, EAS Submit and 
          EAS Update for over-the-air updates for Building, Deploying and Updating respectively</Text>
      </Segment>

      <Segment title="SEO Optimization">
        <Text>We can serve the page as static html for Search Engine Optimization</Text>
        <Text>We first need to enable the 'metro' bundler in our app.json file</Text>
        <CodeSnippet filename="app/app.json">
          {"{"}
          {'  "expo": {'}
          {'    ...'}
          {'    "bundler": "metro",'}
          {'    "output": "static",'}
          {"  }"}
          {"}"}
        </CodeSnippet>
        <Text>The documentation says that if you have a metro.config.js file in your app, 
          ensure it is extending expo/metro-config as shown below</Text>
        <CodeSnippet filename="app/metro.config.js">
          {"const { getDefaultConfig } = require('expo/metro-config);"}
          {""}
          {"/** @type {import('expo/metro-config').MetroConfig} */"}
          {"const config = getMetroConfig(__dirname, {"}
          {"  ... aditional features"}
          {"})"}
        </CodeSnippet>
      </Segment>

      <Segment title="Dynamic Routes">
        <Text>When talking about dynamic routes we encounter a concept called 'static output' which 
          refers to the creation of static pages in build time</Text>
      </Segment>

    </VStack>
  )
}
