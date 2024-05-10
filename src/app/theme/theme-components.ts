import { ThemeComponents } from "@chakra-ui/react";

export const components: ThemeComponents = {
  Heading: {
    baseStyle: {
      borderRadius: "4px",
    }
  },
  Text: {
    baseStyle: {
      color: "white.300"
    },
  },
  Box: {
    baseStyle: {
      bg: "black.200",
      borderRadius: "4px",
      padding: "10px",
    },
    variants: {
      'classic-dark': {
        bg: "black.200",
        color: "purple",
        borderRadius: "15px",
      }
    },

  }
}

export default components;
