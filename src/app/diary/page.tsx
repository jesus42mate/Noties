
import { Divider, Text, VStack } from "@chakra-ui/react";
import { MainHeader } from "@/components/headers/MainHeader"
import { Segment } from "@/components/segments/Segment";
import { CliCommand } from "@/components/code-components/CliCommand";

export default function Diary() {
  return (
    <VStack>
      <MainHeader 
        title="Daily Diary"
        sub_title="Everyday there is something worth writing about"
      />
      <Segment title="May 15">
        <Text>
          Today I learned that CircleCI Jobs are docker containers that actually create our empatico images
          inside their own containers and then upload that into the empatico servers in AWS.
        </Text>
        <Divider my="1rem" />
        <Text>
          I also learned that the <b>tar</b> command has a "-C" option that expects a <b>directory</b>.
          This allows us to set where the contents of the extracted files will be saved.
        </Text>
        <Divider my="1rem" />
        <Text>
          In this case, I'm using it to extract the files of a Go installation and saving the files in
          the /usr/local folder.
        </Text>
        <CliCommand>{"sudo tar -C /usr/local -xzf <go1.22.3.linux_amd64>.tar.gz"}</CliCommand>
        <Text>
          I also realized late that I needed to be sudo in order to make changes in the /usr/local folder
          and that I had to add the -xzf flag to tar, which is a collection of different flags.
        </Text>
        <Divider my="1rem" />
        <Text>
          The -x flag is a <b>main operation mode</b> flag, it tells tar how to behave.
        </Text>
        <Text>
          In this case it's used to to <b>extract</b> the contents of the file passed.
        </Text>
        <Divider my="1rem" />
        <Text>
          The <b>-z</b> flag is used to tell tar that the archive is compressed with gzip, but when 
          combined with the -x flag, it tells tar to decompress the file during the extraction process.
        </Text>
        <Divider my="1rem" />
        <Text>
          Finally, the <b>-f</b> flag indicates that the following is the file passed to tar.
        </Text>
      </Segment>
      <Segment title="May 16">
        <Text>
          This command is used to make git ignore the changes in file permissions and not count them
          as modifications for a commit.
        </Text>
        <CliCommand>git config core.fileMode false</CliCommand>
      </Segment>
    </VStack>
  )
}
