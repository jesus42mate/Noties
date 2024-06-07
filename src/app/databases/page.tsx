import MainHeader from "@/components/headers/MainHeader";
import NoteLink from "@/components/links/note-link/NoteLink";
import { Segment } from "@/components/segments/Segment";
import { HStack, List, ListItem, Text, VStack } from "@chakra-ui/react";

export default function Databases() {
  return (
    <VStack mb="2rem">
      <MainHeader
        title="Databases"
        sub_title="Data and more data"
      />
      <HStack gap="2rem">
        <VStack>
          <NoteLink 
            title="MongoDB"
            link="/databases/mongodb"
            centered={true}
          />
          <NoteLink 
            title="PostgreSql"
            link="/databases/postgres"
            centered={true}
          />
        </VStack>
        <VStack>
          <NoteLink 
            title="Neo4j"
            link="/databases/mongodb"
            centered={true}
          />
          <NoteLink 
            title="MongoDB"
            link="/databases/mongodb"
            centered={true}
          />
        </VStack>
      </HStack>

      <Segment title="Terminology">
        <Text>A database is a repository of data</Text>
        <Text>Query</Text>
        <Text>A Squema is the shape of your data</Text>
        <Text>Transactions are when we need to execute, for example, several queries, but we 
          ask the database to not do anything else in between those, so effectively, this group
          of queries will work as a single unit instead of a distinct operations.</Text>
      </Segment>

      <Segment title="ACID">
        <Text>ACID stands for </Text>
        <List>
          <ListItem>Atomicity</ListItem>
          <ListItem>Consistency</ListItem>
          <ListItem>Isolation</ListItem>
          <ListItem></ListItem>
        </List>
      </Segment>


    </VStack>
  )
}
