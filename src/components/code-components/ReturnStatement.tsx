'use client'
import { HStack, Text } from "@chakra-ui/react"
import InlineText from "./InlineText";
import { Token } from "@/common/types/globalEnums";
import { ReactNode } from "react";

interface ReturnStatementProps {
  children: ReactNode | ReactNode[],
  indent: number,
}

const ReturnStatement: React.FC<ReturnStatementProps> = ({
  children,
  indent
}) => {
  return (
    <HStack display="inline">
      <Text 
        fontWeight={600}
        color="purple.component"
        display="inline"
        ml={`${indent}rem`}
      >return </Text><InlineText value="(" type={Token.VAR} />
      {children}
      <Text ml={`${indent}rem`}
        fontWeight={600}
      >)</Text> 
    </HStack>
  )
}

export default ReturnStatement
