'use client'
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import "./note-link.scss"
import { useState } from "react";

interface NoteLinkProps {
  link: string,
  title: string,
}

interface NoteLinkOptionalProps {
  image?: string
  description?: string,
  centered?: boolean
}

export const NoteLink: React.FC<NoteLinkProps & NoteLinkOptionalProps> = ({
  title,
  image,
  link,
  centered,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Box 
      bg={isHovered ? "white.300" : "#222"}
      my="15px"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      color={isHovered ? "white.300" : "#222"}
      width="500px"
      padding="10px"
      id="note-link"
      borderRadius="4px"
      borderColor={isHovered ? "#222" : "gray.soft"}
    >
      <Link href={link}>
        <Heading
          className="heading"
          textAlign={centered ? "center" : undefined}
          id="link"
          color={isHovered ? "#222" : "#ddd"}
        >{title}</Heading>
        {description && (
          <Text color={isHovered ? "#222" : "#ddd"}>{description}</Text>
        )}
        {image && (
          <Image src={image} />
        )}
      </Link>
    </Box>
  )
}

export default NoteLink;
