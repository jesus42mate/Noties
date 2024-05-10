import { BookStates } from "@/common/types/globalEnums";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react"
import Link from "next/link";

interface BookPreviewProps {
  link: string,
  title: string;
  status: BookStates
  imageSource: string
  description: string;
}

export const BookPreview: React.FC<BookPreviewProps> = ({
  title,
  description,
  imageSource,
  link,
  status,
}) => {
  return (
    <Link
      href={link}
    >
      <VStack
        mx={1}
        w="250px"
        p={4}
        color="white.300"
        bg="black.200"
        borderRadius="md"
        boxShadow="md"
        _hover={{
          border: "1px solid #ddd"
        }}
      >
        <Heading
          my="5px"
          textAlign="center"
          fontSize="lg"
        >{title}</Heading>
        <Text textAlign="center">{description}</Text>
        <Image src={imageSource}
          borderRadius="7px"
          w="200px"
          alt="Structure and Interpretation of Computer Programs"
        />
        <Box>Status: <span style={{border:"1px solid #223"}}>{status}</span></Box>
      </VStack>
    </Link>
  )
}
