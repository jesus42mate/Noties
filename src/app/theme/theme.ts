import { background, extendTheme } from "@chakra-ui/react";
import components from "./theme-components";

const styles = {
  global: {
    body: {
      bg: "#131313",
    },
    text: {
      color: "red"
    }
  }
}

const colors = {
  black: {
    200: "#232323",
    simple: "#121212"

  },
  white: {
    300: "#d3d3d3"
  },
  red: {
    laravel1: "#F9322C",
    laravel2: "#EB4432",
    soft: "#F55"
  },
  green: {
    string: "#55ad37",
  },
  blue: {
    function: "#50a0dc",
  },
  gray: {
    soft: "#999",
    codeBlock: "#141414",
  },
  purple: {
    component: "#C040F9"
  },
  yellow: {
    component: "#FFE990"
  }

}

const fonts = {
  heading: 'var(--playfair-display)',
  body: 'var(--roboto-condensed)',
  text: 'var(--font-rubik)',
}

export const chakraTheme = extendTheme({ 
  styles,
  fonts,
  components,
  colors
})
