import {
  Avatar,
  Box,
  GridItem,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MotionBox } from "components/motion";
import { CardTransition } from "components/page-transitions";
import React from "react";

const BlogTile = (props) => {
  const { title, link, thumbnail, content, pubDate } = props.blogData;

  function cleanTitle(checkTitle) {
    checkTitle = checkTitle.replace("amp;", "");
    return checkTitle;
  }
  function truncateText(text, start, len) {
    return text.length > len ? text.slice(start, len) : text;
  }
  function toText(block) {
    let tag = document.createElement("div");
    tag.innerHTML = block;
    block = tag.innerText;
    return block;
  }
  function convertDate(date) {
    let dateArray = date.slice(0, 10).split("-");
    let year = dateArray.shift();
    dateArray.push(year);
    // console.log(date);
    return `Published: ${dateArray.join("/")}`;
  }
  return (
    <LinkBox
      h={600}
      maxW={"445px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      // m={6}
      overflow={"hidden"}
    >
      <Box
        height={"210px"}
        position="relative"
        mt={-6}
        mx={-6}
        mb={6}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url(${thumbnail})`}
      ></Box>
      <Stack>
        <Text
          color={"green.500"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          Blog
        </Text>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          <LinkOverlay href={`${link}`}>
            {truncateText(cleanTitle(title), 0, 60)}
          </LinkOverlay>
        </Heading>
        <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
          {truncateText(toText(content), 0, 200) + "..."}
        </Text>
      </Stack>
      <Stack mt={6} direction={"column"} spacing={0} fontSize={"sm"}>
        <Text color={"gray.500"}>{convertDate(pubDate)}</Text>
      </Stack>
    </LinkBox>
  );
};

export default BlogTile;
