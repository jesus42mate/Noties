import { Box } from "@chakra-ui/react";

interface CodeSnippetProps {
  children: string | string[];
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  children
}) => {
  return (
    <Box color="white.300" bg="#555" 
      borderRadius="4px"
      padding="1rem"
      my="1rem"
    >
      <pre>
        <code>
          {children}
        </code>
      </pre>
    </Box>
  )
}

export default CodeSnippet;
