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
  IconButton,
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "./motion";
import Header from "./header";
import Projects from "./projects";
import { projectsList } from "data/projects-list";
import "style/style.css";
import UserIcon from "assets/images/user_icon.jpg";
import chira_kader from "assets/images/testimonials/chira_kader.jpg";
import george_piacentini from "assets/images/testimonials/george_piacentini.jpg";
import shailendrasinh_rathod from "assets/images/testimonials/shailendrasinh_rathod.jpg";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  ExternalLinkIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import cvfile from "assets/files/thomashibberscv.pdf";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const TURQUOISE = "#06b6d4";

const Home = () => {
  
  const arrowStyles: React.CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 30px)",
    cursor: "pointer",
  };
  return (
    <Flex direction="column" align="center">
      <Flex maxW="800px" direction={["column", "column", "row"]}>
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
          <Avatar size={"4xl"} src={UserIcon} />
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
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
            My name is Thomas. A dynamic educator passionate about teaching and
            leading the teaching of children and adults.
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
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
      >
        <Flex
          marginTop={10}
          minWidth="max-content"
          direction={["column", "column", "row"]}
          alignItems={"center"}
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
      {/*<MotionBox>
        <Heading marginTop={150}>
          <Flex alignItems="center">
            <Header underlineColor={TURQUOISE} mt={0} mb={0}>
              Testimonials
            </Header>
          </Flex>
        </Heading>
      </MotionBox>
      <MotionBox maxW="800px">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          showIndicators={false}
          emulateTouch={true}
          stopOnHover={true}
          swipeable={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <IconButton
                aria-label={label}
                title={label}
                size={"sm"}
                isRound={true}
                icon={<ChevronLeftIcon />}
                onClick={onClickHandler}
                style={{ ...arrowStyles, left: 5 }}
              ></IconButton>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <IconButton
                aria-label={label}
                title={label}
                size={"sm"}
                isRound={true}
                icon={<ChevronRightIcon />}
                onClick={onClickHandler}
                style={{ ...arrowStyles, right: 5 }}
              ></IconButton>
            )
          }
        >
          <Stack
            px={4}
            py={5}
            borderWidth="1px"
            _hover={{ shadow: "lg" }}
            bg={useColorModeValue("white", "gray.800")}
            rounded="md"
            mb={50}
            mt={50}
          >
            <Text
              fontSize={{ base: "xl", md: "lg" }}
              textAlign={"center"}
              maxW={"3xl"}
            >
              "It was a delectation to have met and worked with Thomas. He is an
              excellent individual with great knowledge and skills. The role of
              a great leader is not to give greatness to human beings, but to
              help them extract the greatness they already have inside of them.
              This is something I have experienced first hand and have seen
              Thomas do gracefully with others as well. Not only a great
              coordinator but also a great friend, colleague, someone who always
              trusts and supports his teachers and is always there if you need
              anything. It’s great knowing that I have gotten to know a great
              individual and that no matter where or when our paths might cross
              again, we will both be elated."
            </Text>
            <Box textAlign={"center"}>
              <Avatar src={chira_kader} alt={"Chira Kader"} mb={2} />

              <Text fontWeight={600}>Jenny Wilson</Text>
              <Text
                fontSize={"sm"}
                color={useColorModeValue("gray.400", "gray.400")}
              >
                English Teacher at Sabis
              </Text>
            </Box>
          </Stack>
          <Stack
            px={4}
            py={5}
            borderWidth="1px"
            _hover={{ shadow: "lg" }}
            bg={useColorModeValue("white", "gray.800")}
            rounded="md"
            mb={50}
            mt={50}
          >
            <Text
              fontSize={{ base: "xl", md: "lg" }}
              textAlign={"center"}
              maxW={"3xl"}
            >
              "I worked under Mr.Thomas Hibbers in my capacity as Boarding
              Housemaster at International School Aamby. During his tenure as
              Head of Boarding and School Life at ISA, Mr.Thomas displayed
              Empathy, Care and Sensitivity in different occasions while dealing
              with students and staff. His calm and collective nature really
              helped the boarding team in solving the heated issues pertaining
              to students' care. Mr.Thomas is a life-long learner, as he
              continued to participate in various workshops to polish his skills
              as a thoughtful leader. I wish him the best in his future career.
              "
            </Text>
            <Box textAlign={"center"}>
              <Avatar
                src={shailendrasinh_rathod}
                alt={"Shailendrasinh Rathod"}
                mb={2}
              />

              <Text fontWeight={600}>Shailendrasinh Rathod, Ph.D</Text>
              <Text
                fontSize={"sm"}
                color={useColorModeValue("gray.400", "gray.400")}
              >
                Accreditation Coordinator, CIS & NEASC Accreditation Team Chair,
                IB Science Teacher
              </Text>
            </Box>
          </Stack>
          <Stack
            px={4}
            py={5}
            borderWidth="1px"
            _hover={{ shadow: "lg" }}
            bg={useColorModeValue("white", "gray.800")}
            rounded="md"
            mb={50}
            mt={50}
          >
            <Text
              fontSize={{ base: "xl", md: "lg" }}
              textAlign={"center"}
              maxW={"3xl"}
            >
              "Although I only met Thomas recently I interviewed him several
              years ago and recommended him for a teaching post in Middle School
              at Erbil in Iraq and he accepted it gladly. I have followed his
              teaching and leadership career since then and I have been
              heartened by what I believe to be his commitment to supporting the
              students in his care, sustaining his colleagues whom he has
              coached and mentored and his dedication to the school in Erbil,
              Ihsan Dogramaci Bilkent Erbil College, as it transitioned into
              International Schools Marif. He has weathered many storms
              throughout the last few years but has stood firm, with his belief
              of offering the best for the school, helping to sustain him and
              allow him to help guide the school to successful MYP authorization
              and start the process for CIS accreditation. Bravo. He seems to be
              an extremely hard-working, diligent and conscientious teacher and
              leader."
            </Text>
            <Box textAlign={"center"}>
              <Avatar
                src={george_piacentini}
                alt={"George Piacentini"}
                mb={2}
              />

              <Text fontWeight={600}>Shailendrasinh Rathod, Ph.D</Text>
              <Text
                fontSize={"sm"}
                color={useColorModeValue("gray.400", "gray.400")}
              >
                Principal (Head of School), SRI KDU International School, Kuala
                Lumpur, Malaysia
              </Text>
            </Box>
          </Stack>
        </Carousel>
      </MotionBox> */}
    </Flex>
  );
};

export default Home;
