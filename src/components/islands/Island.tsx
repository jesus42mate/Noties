import { Heading, Text, VStack } from "@chakra-ui/react";

interface IslandProps {
  title: string,
  sub_title: string,
}

export const Island: React.FC<IslandProps> = ({
  title,
  sub_title,
}) => {
  return (
    <VStack
      border="1px solid #ddd"
      borderRadius="4px"
      padding="10px"
      width="500px"
      my="15px"
      bg="#222"
      color="#ddd"
    >
      <Heading>{title}</Heading>
      <Text
        fontSize="14px"
        textAlign="end"
      >{sub_title}</Text>
    </VStack>
  )
}

export default Island;
