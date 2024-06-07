import { Box, Code, Text } from "@chakra-ui/react";
import { useEffect } from "react";

interface CodeSnippetProps {
  children: string | string[];
  filename?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  children,
  filename,
}) => {

  const parsed_children = Array.isArray(children) ? children : undefined
  const parsed_child = typeof children === "string" ? children : undefined


  let ch: string[] | undefined;
  if (Array.isArray(parsed_children)) {
    ch = parsed_children.map((el: string) => el.concat('\n'))
  }  

  return (
    <>
      <Box bg="#111" py="0.3rem" px="1rem" borderRadius="4px" mt="1rem">
        <Text fontSize="0.9rem" color="#444">{filename}</Text>
      </Box>
      <Box 
        bg="#111" 
        color="white.300"
        borderRadius="4px"
        padding="0.8rem"
        mt="0.1rem"
        flexWrap="wrap"
        mb="1rem"
      >
        <pre>
          <code>
            {ch ? ch : parsed_child}
          </code>
        </pre>
      </Box>
    </>
  )
}

export default CodeSnippet;
