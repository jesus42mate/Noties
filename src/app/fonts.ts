
import { Rubik, Roboto_Condensed, Playfair_Display } from "next/font/google";

const rubik = Rubik({ 
  subsets: ["latin"],
  variable: "--font-rubik",
})

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--playfair-display",
})

const roboto_condensed = Roboto_Condensed({
  weight: "600",
  subsets: ["latin"],
  variable: "--roboto-condensed"
})

export const fonts = {
  rubik,
  roboto_condensed,
  playfair_display,
}

