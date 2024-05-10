import { ReactNode } from "react"
import InlineText from "./InlineText"
import { Token } from "@/common/types/globalEnums"
import { Box, Text } from "@chakra-ui/react"


interface ImportProps {
  what: string[],
  from: string,
}

export const Import: React.FC<ImportProps> = ({
  what,
  from,
}) => {
  return (
    <>
      <InlineText type={Token.CUSTOM} color="purple.component" mr="0.3rem"  value="import" />
      <InlineText type={Token.VAR} value=" {" />
      {what.map((imp) => (
        <Box>
          <Text display="inline" ml="1rem" py="0px" color="red.soft">{imp}</Text>
          <Text display="inline">,</Text>
        </Box>
      ))}
      <InlineText type={Token.VAR} value="} " mr="0.3rem" />
      <InlineText type={Token.CUSTOM} color="purple.component" value="from " mr="0.3rem" />
      <InlineText type={Token.STRING} value="redux" />
      <InlineText type={Token.VAR} value=";" />
    </>
  )
}
