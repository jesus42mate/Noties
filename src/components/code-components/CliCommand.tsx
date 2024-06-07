import { Box, Text } from "@chakra-ui/react"

interface CliCommandProps {
  children: string,
  description?: string,
}

export const CliCommand: React.FC<CliCommandProps> = ({
  children,
  description,
}) => {
  return (
    <>
      <Box 
        m={description ? "1rem 0 0 0" : "0.6rem 0 0.6rem 0" }
        fontSize="15px"
        bg="black.simple"
        fontFamily="monospace"
        borderRadius={description ? "4px 4px 0 0" : "4px"}
      >
        <Text 
          flexWrap="wrap"
          p="0.7rem"
          px="1.5rem"
        >$ {children}</Text>
      </Box>
      {description ? (
        <Box 
          width="100%"
          padding="0.2rem 1.5rem"
          mb="0.6rem" 
          bg="#3b3b9b" 
          borderRadius="0 0 4px 4px"
          color="white.300"
        >{description}</Box>
      ) : undefined}
    </>
  )
}
