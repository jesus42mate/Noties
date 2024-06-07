'use client'
import { CliCommand } from "@/components/code-components/CliCommand";
import MainHeader from "@/components/headers/MainHeader";
import CodeSnippet from "@/components/islands/CodeSnippet";
import { Segment } from "@/components/segments/Segment";
import { Divider, Link, Modal, ModalBody, ModalContent, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react";

export default function Postgres() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const volumeLink = <Link>volume</Link>
  const relationModalLink = <Link onClick={onOpen}>relation</Link>
  return (
    <VStack>
      <MainHeader title="PostgreSQL"
        sub_title="A database for the cool boys"
      />
      <Segment title="A PostgreSql container?">
        <Text>In the course im doing, we downloaded the postgres:14 docker 
          image and it's where we can store the data of our application.
        </Text>
        <Text>To run the container use the docker run command followed by the
          environment variable (-e) set to the correct password for the 
          container
        </Text>
        <Text>Run it in detached mode. (-d)</Text>
        <Text>Set the port (-p) to the most common one, in this case 5432:5432
          according to the postgres documentation
        </Text>
        <CliCommand>docker run -e POSTGRES_PASSWORD=lol -d -p
          5432:5432 pg</CliCommand>
        <Text>We could be passing this container a {volumeLink} so that we can
          actually persist the data that gets stored in the container.
        </Text>
        <Divider my="1rem" />
        <CliCommand>docker exec -u postgres -it pg psql</CliCommand>
        <Text>We are entering into the container using the psql interactive
          terminal for postgres, hence the psql after the image name.
        </Text>
        <Text>Now that we are running an interactive terminal for postgres
          container, we can use some commands to query the database.
        </Text>
        <CliCommand description="Will list all of the tables">
          \l
        </CliCommand>
        <CliCommand description="Will print the help with all the possible commands">
          \?
        </CliCommand>
        <Text></Text>
        <CliCommand description="Allows us to run bash commands">
          \!
        </CliCommand>
        <Text></Text>
        <CliCommand description="By itself it will show us the relations
          in the database that
          we are currently at, we can also use it to get more information
          about a certain table or another {relationModalLink}.">
          \d
        </CliCommand>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent minW="50rem">
            <Segment title="Database Relations">
              <ModalBody>
                <Text>Hello</Text>
              </ModalBody>
            </Segment>
          </ModalContent>
        </Modal>
        <CliCommand description="Will connect us to the database">
          {"\\c <database>"}
        </CliCommand>
        <Text></Text>
      </Segment>

      <Segment title="Creating a Table">
        <CodeSnippet>
          {"CREATE TABLE ingredients ("}
          {"  id INT PRIMARY KEY GENERATE ALWAYS AS IDENTITY, "}
          {"  title VARCHAR ( 255 ) NOT NULL"}
          {");"}
        </CodeSnippet>
      </Segment>
    </VStack>
  )
}
