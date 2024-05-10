
import { Box, Text } from "@chakra-ui/react";
import InlineText from "./InlineText";
import { Token } from "@/common/types/globalEnums";

interface ComponentCallProps {
  name: string,
  indent: number,
  props?: string,
}

export const ComponentCall: React.FC<ComponentCallProps> = ({
  indent,
  name
}) => {
  return (
    <>
      <Text 
        paddingLeft={`${indent}rem`}
      >
        <InlineText value="<" type={Token.CUSTOM} color="purple.component" />
        <InlineText value={name} type={Token.CUSTOM} color="yellow.component" />
        <InlineText value=" />" type={Token.CUSTOM} color="purple.component" />
      </Text>
    </>
  )

}

export default ComponentCall
