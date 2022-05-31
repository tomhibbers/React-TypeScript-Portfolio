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
  Center,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "./motion";
import Header from "./header";
import Projects from "./projects";
import { projectsList } from "data/projects-list";
import "style/style.css";
import chira_kader from "assets/images/testimonials/chira_kader.jpg";
import george_piacentini from "assets/images/testimonials/george_piacentini.jpg";
import shailendrasinh_rathod from "assets/images/testimonials/shailendrasinh_rathod.jpg";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  EmailIcon,
  ExternalLinkIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import cvfile from "assets/files/thomashibberscv.pdf";
import UserIcon from "assets/images/user_icon.jpg";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const TURQUOISE = "#06b6d4";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Home = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  // const top = useBreakpointValue({ base: "95%", md: "50%" });
  const bottom = useBreakpointValue({ base: "10px", md: "calc(50% - 40px)" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  return (
    <Flex direction="column" align="center">
      <Stack minH={"60vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1} m="auto" mb={[16, 16, "auto"]}>
          <Image
            maxH={350}
            size={"4xl"}
            alt={"Login Image"}
            objectFit={"cover"}
            src={UserIcon}
            borderRadius="full"
          />
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Header
              underlineColor={ORANGE}
              mt={0}
              className="face"
              alignItems={"center"}
              sx={{ textAlign: "center" }}
            >
              Welcome!
            </Header>
            <Text fontSize={{ base: "md", lg: "lg" }}>
              My name is Thomas. A dynamic educator passionate about teaching
              and leading the teaching of children and adults.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Link href="mailto:thomasdhibbers@gmail.com">
                <Button w={["100%", 300, 150]} rounded={"full"}>
                  Contact
                </Button>
              </Link>
              <Link href={cvfile} download isExternal>
                <Button
                  w={["100%", 300, 150]}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  CV
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
      <Heading marginTop={90}>
        <Flex alignItems="center">
          <Header underlineColor={TURQUOISE} mt={0} mb={0}>
            Testimonials
          </Header>
        </Flex>
      </Heading>
      <Box
        px={4}
        paddingTop={4}
        paddingBottom={["100px","100px",10]}
        borderWidth="1px"
        _hover={{ shadow: "lg" }}
        bg={useColorModeValue("white", "gray.800")}
        rounded="md"
        mb={50}
        mt={50}
        position={"relative"}
        width={"full"}
        overflow={"hidden"}
      >
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          bottom={bottom}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          bottom={bottom}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          <Stack>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
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
          <Stack>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
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
          <Stack>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
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
        </Slider>
      </Box>
    </Flex>
  );
};

export default Home;
