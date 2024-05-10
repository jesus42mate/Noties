import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface SegmentProps {
  children: ReactElement | ReactElement[],
}

interface SegmentPropsOptional extends BoxProps {
  title?: string,
  color?: string,
  width?: string,
  height?: string,
  snippet?: string,
  titleSize?: string,
}

export const Segment: React.FC<SegmentProps & SegmentPropsOptional> = ({
  width = "50rem",
  title,
  color,
  margin,
  snippet,
  children,
  titleSize,
}) => {
  return (
    <Box
      bg="#222"
      borderRadius="4px"
      border={color ? `1px solid ${color} `:  "1px solid"}
      borderColor="gray.soft"
      padding="30px"
      margin={margin ? margin : "1rem"}
      width={width}
    >
      {snippet && (
        <Box
          bg="#123"
          zIndex="-1"
          maxW="300px"
          position="absolute"
          left="800px"
          borderRadius="4px"
          padding="5px"
        >
          <Box
            bg="#ddd"
            width="100px"
            height="200px"
            maxW="10px"
            position="absolute"
            left="100px"
            borderRadius="40px 20px 20px 10px"
            padding="5px"
          />
          <Text>{snippet}</Text>
        </Box>
      )}
      {title && (
        <Heading
          fontSize={titleSize ? titleSize : "30px"}
          mb="20px"
          textAlign="center"
          color="#ddd"
        >{title}</Heading>
      )}
      {children}
    </Box>
  )
}
