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
  Button,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "./motion";
import Header from "./header";
import Projects from "./projects";
import { projectsList } from "data/projects-list";
import "style/style.css";
import UserIcon from "assets/images/user_icon.jpg";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DownloadIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import cvfile from "assets/files/thomashibberscv.pdf";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const TURQUOISE = "#06b6d4";

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
            Welcome!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is Thomas. I am a dynamic educator passionate about teaching
            and leading of children and adults.
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
        <Flex
          marginTop={10}
          minWidth="max-content"
          direction={["column", "column", "row"]}
          alignContent={"space-between"}
        >
          <Link
            href="mailto:thomasdhibbers@gmail.com"
            isExternal
            px={4}
            py={2}
            borderWidth="1px"
            bg={useColorModeValue("blue.100", "gray.800")}
            rounded={"xl"}
            width="150px"
            mx={5}
            marginBottom={5}
          >
            Contact
          </Link>
          <Link
            href={cvfile}
            download
            isExternal
            px={4}
            py={2}
            borderWidth="1px"
            bg={useColorModeValue("blue.100", "gray.800")}
            rounded={"xl"}
            width="150px"
            mx={5}
            marginBottom={5}
          >
            CV
          </Link>
        </Flex>
      </MotionBox>
      <MotionBox>
        <Heading marginTop={150}>
          <Flex alignItems="center">
            <Header underlineColor={TURQUOISE} mt={0} mb={0}>
              Testimonials
            </Header>
          </Flex>
        </Heading>
      </MotionBox>
      <MotionBox>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          showIndicators={true}
          emulateTouch={true}
          stopOnHover={true}
          swipeable={true}
        >
          <Stack
            px={4}
            py={5}
            borderWidth="1px"
            _hover={{ shadow: "lg" }}
            bg={useColorModeValue("white", "gray.800")}
            position="relative"
            rounded="md"
            mb={50}
            mt={50}
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign={"center"}
              maxW={"3xl"}
            >
              "We had an incredible experience working with Chakra Templates and
              were impressed they made such a big difference in only three
              weeks. Our team is so grateful for the wonderful improvements they
              made and their ability to get familiar with the product concept so
              quickly."
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
          <Stack
            px={4}
            py={5}
            borderWidth="1px"
            _hover={{ shadow: "lg" }}
            bg={useColorModeValue("white", "gray.800")}
            position="relative"
            rounded="md"
            mb={50}
            mt={50}
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign={"center"}
              maxW={"3xl"}
            >
              "We had an incredible experience working with Chakra Templates and
              were impressed they made such a big difference in only three
              weeks. Our team is so grateful for the wonderful improvements they
              made and their ability to get familiar with the product concept so
              quickly."
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
          <Stack
            px={4}
            py={5}
            borderWidth="1px"
            _hover={{ shadow: "lg" }}
            bg={useColorModeValue("white", "gray.800")}
            position="relative"
            rounded="md"
            mb={50}
            mt={50}
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign={"center"}
              maxW={"3xl"}
            >
              "We had an incredible experience working with Chakra Templates and
              were impressed they made such a big difference in only three
              weeks. Our team is so grateful for the wonderful improvements they
              made and their ability to get familiar with the product concept so
              quickly."
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
        </Carousel>
      </MotionBox>
    </Flex>
  );
};

export default Home;
