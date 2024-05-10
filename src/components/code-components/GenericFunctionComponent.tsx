'use client'
import { HStack, Text } from "@chakra-ui/react"
import InlineText from "./InlineText";
import { Token } from "@/common/types/globalEnums";
import { ReactNode } from "react";
import { Const } from "./Const";

interface GenericFunctionComponentProps {
  name: string,
  children: ReactNode | ReactNode[],
}

const GenericFunctionComponent: React.FC<GenericFunctionComponentProps> = ({
  name,
  children,
}) => {
  return (
    <HStack display="inline">
      <Const 
        indent={0}
        name={name}
        isExported 
        isFunctionalComponent 
      />
      {children}
      <InlineText type={Token.VAR} value="}" /> 
    </HStack>
  )
}

export default GenericFunctionComponent
