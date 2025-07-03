import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { system } from "../../theme"  // adjust path accordingly

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  )
}
