import { Box, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

export const CliCommand: React.FC<{
  children: string,
}> = (props) => {
  const { children } = props;
  return (
    <Box 
      my="0.8rem"
      fontSize="15px"
      bg="black.simple"
      fontFamily="monospace"
      borderRadius="4px">
      <Text 
        p="0.7rem"
        px="1.5rem"
      >$ {children}</Text>
    </Box>
  )
}
