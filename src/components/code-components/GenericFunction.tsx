'use client'
import { HStack, Text } from "@chakra-ui/react"
import InlineText from "./InlineText";
import { Token } from "@/common/types/globalEnums";

interface GenericFunctionProps {
  functionCall: string,
  baseValue: string,
}

const GenericFunction: React.FC<GenericFunctionProps> = ({
  baseValue,
  functionCall,
}) => {
  return (
    <HStack display="inline">
      <Text fontSize="md" fontWeight="500" color="blue.function" display="inline">{functionCall}</Text>
      <InlineText type={Token.VAR} value="(" />
      <InlineText type={Token.STRING} value={baseValue} />
      <InlineText type={Token.VAR} value=")" />
    </HStack>
  )
}

export default GenericFunction
