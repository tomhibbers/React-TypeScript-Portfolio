import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Heading,
  Flex,
  Text,
  useColorModeValue,
  Button,
  Collapse,
} from "@chakra-ui/react";
import {
  PageSlideFade,
  StaggerChildren,
  CardTransition,
} from "./page-transitions";
import { MotionBox } from "./motion";
import Header from "./header";

const TURQUOISE = "#06b6d4";

const Teaching = () => {
  const [showTeaching, setShowTeaching] = React.useState(false);
  const [showGlobalCitizenship, setShowGlobalCitizenship] =
    React.useState(false);

  return (
    <PageSlideFade>
      <StaggerChildren>
        {/* TEACHING */}
        <MotionBox id="introduction">
          <Heading>
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Introduction
              </Header>
            </Flex>
          </Heading>
        </MotionBox>
        <MotionBox>
          <CardTransition>
            <Box
              px={4}
              py={5}
              borderWidth="1px"
              _hover={{ shadow: "lg" }}
              bg={useColorModeValue("white", "gray.800")}
              position="relative"
              rounded="md"
              mt={50}
              mb={50}
            >
              <Collapse startingHeight={100} in={showTeaching}>
                <Text fontSize={{ base: "sm" }} textAlign={"left"}>
                  I effectively apply the most up-to-date, research-based
                  strategies to address the needs of diverse learners learned
                  from the continuous upskill workshops done as IB Workshop
                  Leader and School Visiting Team Member in IB PYP, MYP, DP and
                  other curricula workshops. I add these new strategies to the
                  best strategies that I have learned over the years, developing
                  a unique combination of the best teaching strategies from the
                  best practices in the past and present critical thinking and
                  inquiry-based strategies. Kindly refer to the recordings in my
                  portfolio for demonstrations about how I teach.
                </Text>
                <br />
                <Text fontSize={{ base: "sm" }} textAlign={"left"}>
                  In management positions I lead a curricular system based on
                  the most recent understanding about learning, including
                  developing, implementing, and monitoring curriculum and
                  learner progress. This is done following the most up to date
                  IB and CIS standards and using the learning platform, e.g.,
                  ManageBac effectively. Kindly refer to the attached
                  self-studies using the IB and CIS standards.
                </Text>
                <br />
                <Text fontSize={{ base: "sm" }} textAlign={"left"}>
                  Furthermore, I teach teachers to teach with inhouse workshops
                  using the approaches knowledge and skills learned as IB
                  workshop leader. This is followed up with personal class
                  visits using these standards as assessment criteria of how
                  teachers are teaching. After the visit the teacher and I
                  collaboratively decide upon an area for improvement at the
                  next visit the next week. Doing this, teachers are given the
                  professional guidance to improve continuously. Teachers are
                  also encouraged to do as many professional development
                  workshops as possible to broaden their understanding and add
                  to their existing teaching strategy base. I get as much job
                  satisfaction from seeing the professional development of
                  teachers as seeing kids grow academically.
                </Text>
              </Collapse>
              <Button
                size="sm"
                onClick={() => setShowTeaching(!showTeaching)}
                mt="1rem"
              >
                Show {showTeaching ? "Less" : "More"}
              </Button>
            </Box>
          </CardTransition>
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
            <Box
              as="iframe"
              src="https://www.youtube.com/embed/oj1rPdQgNS8?modestbranding=1"
              width="100%"
              sx={{
                aspectRatio: "16/9",
              }}
            />
            <Box
              as="iframe"
              src="https://www.youtube.com/embed/gIkAEyLgkTM?modestbranding=1"
              width="100%"
              sx={{
                aspectRatio: "16/9",
              }}
            />
          </Carousel>
        </MotionBox>
        {/* Global citizenship */}
        <MotionBox>
          <Heading>
            <Flex alignItems="center">
              <Header
                id="global-citizenship"
                underlineColor={TURQUOISE}
                mt={0}
                mb={0}
              >
                Global Citizenship
              </Header>
            </Flex>
          </Heading>
        </MotionBox>
        <MotionBox>
          <CardTransition>
            <Box
              px={4}
              py={5}
              borderWidth="1px"
              _hover={{ shadow: "lg" }}
              bg={useColorModeValue("white", "gray.800")}
              position="relative"
              rounded="md"
              mt={50}
              mb={50}
            >
              <Collapse startingHeight={100} in={showGlobalCitizenship}>
                <Text fontSize={{ base: "sm" }} textAlign={"left"}>
                  Global citizenship became part of my personality from a young
                  age growing up in the rainbow nation of South Africa.
                  Similarly, the students, families, teachers, and others I work
                  with, in international schools come from many different
                  cultural, ethnic, and educational backgrounds. I proactively
                  address unconscious bias and overt racism through all my
                  interactions and the processes that I am involved with my
                  personal example.
                </Text>
                <br />
                <Text fontSize={{ base: "sm" }} textAlign={"left"}>
                  This is taken to a higher level with workshopping students and
                  teachers, sharing the approaches, knowledge, and skills
                  learned in the IB ‘International mindedness’ workshop at every
                  school I work. The workshop is based on Edward Hall’s cultural
                  iceberg model. According to this theory the flags, folklore,
                  festivals, fashions, and food clearly visible above the
                  waterline is based on the ideas, preferences, and priorities
                  that comprise individual attitudes and values below the
                  waterline. This is what individuals in the culture have
                  learned about what is acceptable and unacceptable behavior in
                  society. The first phase of the workshop is connecting the
                  culture groups with their own culture to respect their own
                  culture and identify what is unique about their culture. This
                  is done by dividing the group into cultural groups in the
                  school community. They explore their own culture using the
                  iceberg model. The next phase is to let each culture group
                  present its culture to the main group so that the different
                  groups learn more about each other. Special attention is given
                  to making the other cultural groups aware of what is
                  acceptable and unacceptable to each group so that they can be
                  sensitives and respect each other. Extra special attention is
                  given to respecting the host culture. The workshop culminates
                  in the development of a school culture that respects all the
                  different cultures in the school. This prepares students and
                  teachers for a lifetime of multi-cultural global citizenship.
                  Furthermore, the IB Learner Profile attributes of being
                  inquirers, knowledgeable, thinkers, communicators, principled,
                  open-minded, caring, risk-takers, balanced and reflective
                  facilitates being an international-minded global citizen. The
                  development of these attributes is further encouraged by
                  awarding IB Learner Profile certificates to students who
                  demonstrate these attributes and teachers who model them. The
                  policy is to give every student and teacher at least one
                  certificate every quarter because every child and teacher does
                  something right somewhere at some time. This is recognized and
                  celebrated by the group and held up as a good example to
                  encourage further development by everybody. According to this
                  theory the flags, folklore, festivals, fashions, and food
                  clearly visible above the waterline is based on the ideas,
                  preferences, and priorities that comprise individual attitudes
                  and values below the waterline. This is what individuals in
                  the culture have learned about what is acceptable and
                  unacceptable behavior in society. The first step is dividing
                  the group into culture groups who explore their own culture
                  using the iceberg model. Each culture group presents its
                  culture to the main group. Special attention is given to
                  respecting the host culture. The workshop culminates with the
                  development of a school culture that respects all the
                  different cultures in the school.
                </Text>
                <br />
                <Text fontSize={{ base: "sm" }} textAlign={"left"}>
                  the school. Furthermore, I demonstrate the IB Learner Profile
                  attributes and encourage my students to do so by rewarding
                  them with IB Learner profile certificates when they do so. My
                  policy is to give every student at least one certificate every
                  quarter because every child does something right somewhere. It
                  is beautiful to observe how the students develop these
                  attributes and see the personal growth when they reflect upon
                  their development.
                </Text>
                <Text fontSize={{ base: "sm" }} textAlign={"left"}>
                  Furthermore, I demonstrate the IB Learner Profile attributes
                  and encourage my students to do so by rewarding them with IB
                  Learner profile certificates when they do so. My policy is to
                  give every student at least one certificate every quarter
                  because every child does something right somewhere. It is
                  beautiful to observe how the students develop these attributes
                  and see the personal growth when they reflect upon their
                  development. Additionally, students and teachers are
                  encouraged to participate in after-school activities, because
                  through playing in the same sports team or band students
                  really get to know each other, bond, and overcome prejudices
                  they may have had.
                </Text>
              </Collapse>
              <Button
                size="sm"
                onClick={() => setShowGlobalCitizenship(!showGlobalCitizenship)}
                mt="1rem"
              >
                Show {showGlobalCitizenship ? "Less" : "More"}
              </Button>
            </Box>
          </CardTransition>
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
            <Box
              as="iframe"
              src="https://www.youtube.com/embed/oj1rPdQgNS8?modestbranding=1"
              width="100%"
              sx={{
                aspectRatio: "16/9",
              }}
            />
            <Box
              as="iframe"
              src="https://www.youtube.com/embed/CpyoU95z7bE?modestbranding=1"
              width="100%"
              sx={{
                aspectRatio: "16/9",
              }}
            />
          </Carousel>
        </MotionBox>
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default Teaching;
