import { VStack } from "@chakra-ui/react";
import { MainHeader } from "@/components/headers/MainHeader"
import NoteLink from "@/components/links/note-link/NoteLink";

export default function Laravel() {

  return (
    <VStack>
      <NoteLink 
        title="Laravel"
        description="A PHP Framework for Web Artisans"
        link="/frameworks/laravel"
      />
      <NoteLink 
        title="gRPC"
        description="gRPC is a high performance, open-source universal RPC framework."
        link="/frameworks/grpc"
      />
    </VStack>
  )
}
