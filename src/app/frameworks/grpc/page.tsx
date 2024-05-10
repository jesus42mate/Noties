import { Box, Text, VStack } from "@chakra-ui/react";
import { MainHeader } from "@/components/headers/MainHeader"
import { Segment } from "@/components/segments/Segment";
import Link from "next/link";

export default function gRPC () {
  return (
    <VStack>
      <MainHeader 
        title="gRPC"
        sub_title="gRPC is a high performance, open-source universal RPC framework."
      />
      <Segment 
        color="#EE4432"
        title="Basics"
      >
        <>
          <Link href="#my-section">go to first section</Link>
          <Text
            color="#ddd"
            padding="4px"
          >The following are the basics.</Text>
          <Text>I dont want this to be centered</Text>
        </>
      </Segment>
      <Box id="#my-section"
        margin="50px"
        width="100px" height="10vh" bg="red"></Box>
      <Box id="#my-section2"
        margin="50px"
        width="100px" height="10vh" bg="red"></Box>
      <Box id="#my-section3"
        margin="50px"
        width="100px" height="10vh" bg="red"></Box>
    </VStack>
  )
}
