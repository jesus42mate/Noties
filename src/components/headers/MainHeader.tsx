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
}) => {
  return (
    <VStack
      borderRadius="4px"
      wrap="nowrap"
      padding="10px"
      minW="500px"
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
