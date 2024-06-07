import { VStack } from "@chakra-ui/react";
import NoteLink from "@/components/links/note-link/NoteLink";

export default function Infrastructure() {
  return (
    <VStack>
      <NoteLink 
        title="Docker"
        description="Containerize everything"
        link="/infrastructure/docker"
      />
    </VStack>
  )
}
