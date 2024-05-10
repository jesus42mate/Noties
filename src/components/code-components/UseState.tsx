'use client'
import { HStack, Text } from "@chakra-ui/react"
import InlineText from "./InlineText";
import { Token } from "@/common/types/globalEnums";

interface UseStateProps {
  type?: Token
  baseValue: string,
}

export const UseState: React.FC<UseStateProps> = ({
  baseValue,
  type = Token.STRING,
}) => {
  return (
    <HStack display="inline">
      <Text fontSize="md" fontWeight="500" color="blue.function" display="inline">useState</Text>
      <InlineText type={Token.VAR} value="(" />
      {type === Token.VAR && (
        <InlineText type={Token.VAR} value={baseValue} />
      )}
      {type === Token.STRING && (
        <InlineText type={Token.STRING} value={baseValue} />
      )}
      <InlineText type={Token.VAR} value=")" />
    </HStack>
  )
}
