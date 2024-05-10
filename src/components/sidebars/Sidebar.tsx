import { Ref } from "react"
import { Segment } from "../segments/Segment"
import { ListItem, OrderedList, Text } from "@chakra-ui/react"

interface SidebarProps {
  titles: Ref<string>[]
}

export const Sidebar: React.FC<SidebarProps> = ({
  titles
}) => {
  return (
    <>
      <OrderedList>
        {titles.map((title) => (
          <ListItem>
            {title}
          </ListItem>
        ))}
      </OrderedList>
      <Text>Hello</Text>
    </>
  )
}
