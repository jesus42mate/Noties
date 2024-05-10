import { VStack } from "@chakra-ui/react";
import { MainHeader } from "@/components/headers/MainHeader"
import NoteLink from "@/components/links/note-link/NoteLink";

export default function Languages() {

  return (
    <VStack>
      <NoteLink 
        title="Go"
        description="A language to develop backends(sometimes)"
        link="/languages/go"
      />
    </VStack>
  )
}
