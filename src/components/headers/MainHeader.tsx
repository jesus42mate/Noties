import { Heading, Text, VStack } from "@chakra-ui/react";

interface MainHeaderProps {
  title: string,
  sub_title: string,
}

interface MainHeaderOptionalProps {
  image?: string
}

export const MainHeader: React.FC<MainHeaderProps & MainHeaderOptionalProps> = ({
  title,
  sub_title,
  image,
}) => {
  return (
    <VStack
      border="1px solid"
      borderColor="gray.soft"
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

export default MainHeader;
