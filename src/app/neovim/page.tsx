import { HStack, VStack } from "@chakra-ui/react";
import Island from "@/components/islands/Island";

export default function Neovim() {

  return (
    <HStack>
      <Island title="Island 1" sub_title="This should be resizeable">

      </Island>
      <Island title="Island 2" sub_title="This should be resizeable">

      </Island>
      <Island title="Island 3" sub_title="This should be resizeable">

      </Island>
    </HStack>
  )
}
