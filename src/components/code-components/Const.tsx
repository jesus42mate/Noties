'use client'
import { HStack, Text } from "@chakra-ui/react"
import { ReactNode, useState } from "react";
import InlineText from "./InlineText";
import { Token } from "@/common/types/globalEnums";

interface ConstProps {
  name: string,
  type?: string
  value?: string | number | ReactNode,
  indent: number,
  isExported?: boolean,
  isFunctionalComponent?: boolean,
}

export const Const: React.FC<ConstProps> = ({
  isFunctionalComponent,
  isExported,
  indent,
  value,
  type,
  name,
}) => {

  const functionalComponentBoilerplate = ' = ( ) => {'

  return (
    <HStack>
      <Text 
        paddingLeft={`${indent}rem`}
        fontSize="md"
        fontWeight="600"
        color="purple.component"
      >
        {isExported ? "export const" : "const"}
      </Text>
      <Text
        fontSize="md"
        fontWeight="500"
        color="blue.function"
      >
        {name}
        {!value && !isFunctionalComponent && (
          <Text 
            display="inline"
            fontSize="md" 
            fontWeight="500"
            color="white.300"
          >
            ;
          </Text>
        )}
      </Text>
      {isFunctionalComponent && (
        <>
          <InlineText type={Token.VAR} value={functionalComponentBoilerplate} />
        </>
      )}
      {value && (
        <>
          {typeof value === "string" && (
            <InlineText type={Token.VAR} value={" = " + value} />
          )}
          {typeof value === "object" && (
            <>
              <Text> = </Text>{value}
            </>
          )}
        </>
      )}
    </HStack>
  )
}
