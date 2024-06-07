import { Text, VStack } from "@chakra-ui/react";
import { MainHeader } from "@/components/headers/MainHeader"
import NoteLink from "@/components/links/note-link/NoteLink";
import { Segment } from "@/components/segments/Segment";
import { CliCommand } from "@/components/code-components/CliCommand";

export default function EmpaticoWorkflow() {
  return (
    <VStack>
      <MainHeader 
        title="Empatico Workflow"
        sub_title="Important things for the empatico app"
      />
      <Segment title="Populating the Database">
        <Text>
          Sometimes you build the project from a new machine and you need to populate the database,
          in those cases, a command is needed to do so, and since we are using docker containers 
          for each of the empatico processes, ssh'ing into the components is one of necessities.
        </Text>
        <CliCommand>{"cat <sql-database-file>.sql | docker exec -i <empatico-database-container-name> /usr/bin/mysql --user=local_empatico password=secret --database=local_empatico"}</CliCommand>
        <Text>We are basically copying the sql file into the empatico database container.</Text>
      </Segment>

      <Segment title="How to get the library and activities info">
        <Text>To get the information from the library we need to be hit some endpoints</Text>
        <Text>
          First we need to hit the store so that the backend can do it's magic and have it
          cache the library.
        </Text>
        <Text>hit: {'{{localhost}}/library/store'}</Text>
        <Text>{'{{localhost}}/library/store'}</Text>
      </Segment>
    </VStack>
  )
}
