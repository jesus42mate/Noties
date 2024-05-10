'use client'
import { Token } from "@/common/types/globalEnums"
import { Box, BoxProps, ChakraProps, Text } from "@chakra-ui/react"

interface InlineTextProps extends BoxProps {
  value: string,
  type: Token,
}

const InlineText: React.FC<InlineTextProps & ChakraProps> = ({
  mr = "0.0rem",
  color,
  value,
  type,
}) => {
  return (
    <Box display="inline" mr={mr}>
      {type === Token.CUSTOM && (
        <Text
          fontWeight={600}
          display="inline"
          color={color}
        >
         {value} 
        </Text>
      )}
      {type === Token.COMPONENT && (
        <Text>
          {value}
        </Text>
      )}
      {type === Token.STRING && (
        <Text 
          display="inline" 
          color="green.string"
          fontWeight="500"
        >"{value}"</Text>
      )}
      {type === Token.VAR && (
        <Text 
          display="inline" 
          color="#ccc"
          fontWeight="500"
        >{value}</Text>
      )}
    </Box>
  )
}

export default InlineText
