import { Box } from "@chakra-ui/react";

interface CodeBlockProps {
  children: React.ReactNode;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children
}) => {
  return (
    <Box 
      my="1rem"
      p='1rem' 
      bg="gray.codeBlock" 
      borderRadius='4px'
    >
      {children}
    </Box>
  )

}

export default CodeBlock
