import { Heading } from "@chakra-ui/react"
import { ReactElement } from "react"

interface ParagraphTitleProps {
  children: ReactElement
}

export const ParagraphTitle: React.FC<ParagraphTitleProps> = ({ children }) => {
  return (
    <Heading

    >
      {children}
    </Heading>
  )
}
