import { HStack, VStack } from "@chakra-ui/react";
import { MainHeader } from "@/components/headers/MainHeader"
import { BookPreview } from "@/components/segments/BookPreview";
import { BookStates } from "@/common/types/globalEnums";

const books = [
  {
    title: "Structure and Interpretation of Computer Programs",
    description: "They say this one's pretty good",
    imageSource: "books/interpratationofcomputerprograms.jpg",
    link: "./strucAndInter/page.tsx",
    status: BookStates.ToBeStarted,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    description: "They say this one's pretty good",
    imageSource: "books/interpratationofcomputerprograms.jpg",
    link: "./strucAndInter/page.tsx",
    status: BookStates.ToBeStarted,
  },
]

export default function Books() {
  return (
    <VStack
    >
      <MainHeader 
        title="The books I've read!"
        sub_title="Thoughts, reflections and notes on the books I've read about software"
      />
      <HStack>
        {books.map((book) => (
          <BookPreview
            key={book.title}
            title={book.title}
            description={book.description}
            imageSource={book.imageSource}
            status={book.status}
            link={book.link}
          />
        ))}
      </HStack>
    </VStack>
  )
}
