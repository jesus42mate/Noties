'use client'
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import "./note-link.scss"
import { useState } from "react";

interface NoteLinkProps {
  link: string,
  title: string,
  description: string,
}

interface NoteLinkOptionalProps {
  image?: string
}

export const NoteLink: React.FC<NoteLinkProps & NoteLinkOptionalProps> = ({
  title,
  description,
  image,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Box 
      bg={isHovered ? "#dcdcdc" : "#222"}
      my="15px"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      color={isHovered ? "#ddd" : "#222"}
      width="500px"
      padding="10px"
      id="note-link"
      borderRadius="4px"
      border={isHovered ? "1px solid #222" : "1px solid #ddd"}
    >
      <Link href={link}>
        <Heading
          className="heading"
          id="link"
          color={isHovered ? "#222" : "#ddd"}
        >{title}</Heading>
        <Text color={isHovered ? "#222" : "#ddd"}>{description}</Text>
        {image && (
          <Image src={image} />
        )}
      </Link>
    </Box>
  )
}

export default NoteLink;
