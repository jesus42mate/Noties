'use client'
import { ChakraProvider } from "@chakra-ui/react"
import { chakraTheme } from "./theme/theme"

const Providers = ({ children } : {
  children: React.ReactNode
}) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      {children}
    </ChakraProvider>
  )
}

export default Providers
