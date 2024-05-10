'use client'
import { Box, HStack, Text } from "@chakra-ui/react"
import { Anchor } from "../links/Anchor";
import { usePathname } from "next/navigation";

export const NavigationBar = () => {
  const extra = (
    <Box
      w="100vw"
      h="30px"
      bgGradient="linear(to-r, red.laravel1, red.laravel2)"
    >
      <Text
        fontFamily="var(--playfair-display)"
      >This page is trying to look like the laravel documentation!</Text>
    </Box>
  )
  return (
    <>
      {usePathname() == "/frameworks/laravel" && (
        <Box
          w="100vw"
          h="30px"
          bgGradient="linear(to-t, red.laravel1, red.laravel2)"
        >
          <Text
            pt="4px"
            color="#fff"
            fontSize="small"
            textAlign="center"
            fontFamily="var(--playfair-display)"
          >This page is trying it's hardest to look like the laravel documentation!</Text>
        </Box>
      )}
      <HStack
        as="nav"
        spacing="8"
        p="8"
        borderBottom="2px solid #ddd"
        borderBottomColor="gray.soft"
        justifyContent="flex-end"
      >
        <HStack
          color="#ddd"
          spacing="46px"
        >
          {usePathname() != "/" && (
            <Anchor 
              link="/" 
              text="Home"
            />
          )}
          <Anchor 
            link="/About" 
            text="About Me"
          />
          <Anchor 
            link="/Notes" 
            text="Notes"
          />
        </HStack>
      </HStack>
    </>
  );
}
