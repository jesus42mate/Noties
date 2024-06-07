import MainHeader from "@/components/headers/MainHeader"
import NoteLink from "@/components/links/note-link/NoteLink"
import { Grid, GridItem, HStack, Image, VStack } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <VStack>
        <HStack>
          <MainHeader 
            title="Welcome to my Notes"
            sub_title="A collection of notes about web development"
          />
          <Image 
            m="1rem 1rem 0 1rem"
            borderRadius="10px"
            src="/disc.png"
            alt="a_photo_of_my_discord_profile"
          />
        </HStack>
      </VStack>

      <VStack>
        <HStack>
          <VStack
            display="inline"
            h="100vh"
          >
          </VStack>
          <VStack
            display="inline"
            alignItems="center"
          >
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
              title="Databases"
              description="Big chunkz of Data"
              link="/databases"
            />
          </VStack>
          <VStack
            display="inline"
            alignItems="center"
          >
            <NoteLink 
              title="Security"
              description="Security good practices for servers and stuff"
              link="/security"
            />

            <NoteLink 
              title="Infrastructure"
              description="The Backbone"
              link="/infrastructure"
            />
            <NoteLink 
              title="Frameworks" 
              description="About the frameworks I have learned"
              link="/frameworks"
            />
            <NoteLink 
              title="Bash Commands"
              description="Be quick with it!"
              link="/bash-commands"
            />
          </VStack>
        </HStack>
      </VStack>
    </>
  )
}
