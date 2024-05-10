
import { VStack } from "@chakra-ui/react";
import NoteLink from "@/components/links/note-link/NoteLink";

export default function Libraries() {
  return (
    <VStack>
      <NoteLink 
        title="React"
        description="A JavaScript library for building user interfaces"
        link="/libraries/react"
      />
      <NoteLink 
        title="Redux"
        description="A library for managing and centralizing state application"
        link="/libraries/redux"
      />
    </VStack>
  )
}
