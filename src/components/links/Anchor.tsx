import { Link } from "@chakra-ui/react"

export const Anchor = ({ link, text }:{
  link: string,
  text: string,
}) => {
  return (
    <Link 
      _hover={{
        color: "gray.500",
      }}
      href={link}>{text}</Link>
  );
}

