import { navigateToElement } from "@/common/types/helpers";
import { Text } from "@chakra-ui/react";

interface TextLinkProps {
  id: string,
}

export const TextLink: React.FC<TextLinkProps> = () => {
  
  return (
    <Text _hover={{cursor: "pointer"}} onClick={() => navigateToElement("actionCreators")}>
      <Text>action creators</Text>
    </Text>
  )
}
