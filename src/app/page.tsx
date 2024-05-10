import MainHeader from "@/components/headers/MainHeader"
import NoteLink from "@/components/links/note-link/NoteLink"
import { Heading, Text, VStack } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <VStack
        alignItems="center"
        w="100vw"
        h="100vh"
      >
        <MainHeader 
          title="Welcome to my Notes"
          sub_title="A collection of notes about web development"
        />
        <NoteLink 
          title="Frameworks" 
          description="About the frameworks I have learned"
          link="/frameworks"
        />
        <NoteLink 
          title="Libraries"
          description="Libraries I've used in my projects (React is here)"
          link="/libraries"
        />
        <NoteLink 
          title="Languages" 
          description="Info about the langs I know"
          link="/languages"
        />
        <NoteLink 
          title="NeoVim!" 
          description="Info about the BEST editor you could ever have"
          link="/neovim"
        />
        <NoteLink 
          title="Books"
          description="Books I've read about Software in general"
          link="/books"
        />
        <NoteLink 
          title="Security"
          description="Security good practices for servers and stuff"
          link="/security"
        />

      </VStack>
      <VStack>
      </VStack>
    </>
  )
}
