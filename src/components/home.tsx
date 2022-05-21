import * as React from "react";
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "./motion";
import Header from "./header";
import Projects from "./projects";
import { projectsList } from "data/projects-list";
import "style/style.css";
import UserIcon from "assets/images/user_icon.jpg";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const Home = () => {
  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <Avatar size={"2xl"} src={UserIcon} />
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Header underlineColor={ORANGE} mt={0} className="face">
            Welkom!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is Thomas. I am a dynamic educator passionate about teaching
            and leading the teaching of children and adults.
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION,
          },
        }}
      ></MotionBox>
      <MotionBox>
        <Stack
          px={4}
          py={5}
          borderWidth="1px"
          _hover={{ shadow: "lg" }}
          bg={useColorModeValue("white", "gray.800")}
          position="relative"
          rounded="md"
          mt={200}
          mb={50}
        >
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign={"center"}
            maxW={"3xl"}
          >
            "We had an incredible experience working with Chakra Templates and
            were impressed they made such a big difference in only three weeks.
            Our team is so grateful for the wonderful improvements they made and
            their ability to get familiar with the product concept so quickly."
          </Text>
          <Box textAlign={"center"}>
            <Avatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              alt={"Jenny Wilson"}
              mb={2}
            />

            <Text fontWeight={600}>Jenny Wilson</Text>
            <Text
              fontSize={"sm"}
              color={useColorModeValue("gray.400", "gray.400")}
            >
              Vice President
            </Text>
          </Box>
        </Stack>
      </MotionBox>
    </Flex>
  );
};

export default Home;
