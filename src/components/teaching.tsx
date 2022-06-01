import * as React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import {
  Box,
  Heading,
  Flex,
  Text,
  useColorModeValue,
  Button,
  Collapse,
  Image,
  Stack,
  VStack,
  Center,
  IconButton,
  AspectRatio,
  useBreakpointValue,
  Container,
  Link,
} from "@chakra-ui/react";
import {
  PageSlideFade,
  StaggerChildren,
  CardTransition,
} from "./page-transitions";
import { MotionBox } from "./motion";
import Header from "./header";
import imgGC1 from "../assets/images/teaching/imgGC1.jpg";
import imgGC2 from "../assets/images/teaching/imgGC2.jpg";
import imgGC3 from "../assets/images/teaching/imgGC3.jpg";
import imgL1 from "../assets/images/teaching/imgL1.jpg";
import imgL2 from "../assets/images/teaching/imgL2.jpg";
import imgL3 from "../assets/images/teaching/imgL3.jpg";
import imgCol1 from "../assets/images/teaching/imgCol1.jpg";
import imgCol2 from "../assets/images/teaching/imgCol2.jpg";
import imgCol3 from "../assets/images/teaching/imgCol3.jpg";
import imgCol4 from "../assets/images/teaching/imgCol4.jpg";
import imgCol5 from "../assets/images/teaching/imgCol5.jpg";
import imgESL1 from "../assets/images/teaching/imgESL1.jpg";
import imgESL2 from "../assets/images/teaching/imgESL2.png";
import imgRep1 from "../assets/images/teaching/imgRep1.png";
import imgRep2 from "../assets/images/teaching/imgRep2.jpg";
import imgRep3 from "../assets/images/teaching/imgRep3.jpg";
import imgSD1 from "../assets/images/teaching/imgSD1.png";
import imgSD2 from "../assets/images/teaching/imgSD2.jpg";
import imgRef1 from "../assets/images/teaching/imgRef1.png";
import imgRef2 from "../assets/images/teaching/imgRef2.jpg";
import imgMkt1 from "../assets/images/teaching/imgMkt1.jpg";
import imgMkt2 from "../assets/images/teaching/imgMkt2.jpg";
import imgAcc1 from "../assets/images/teaching/imgAcc1.png";
import imgAcc2 from "../assets/images/teaching/imgAcc2.jpg";
import imgIns1 from "../assets/images/teaching/imgIns1.png";
import imgIns2 from "../assets/images/teaching/imgIns2.png";
import imgIns3 from "../assets/images/teaching/imgIns3.png";
import imgIns4 from "../assets/images/teaching/imgIns4.png";
import imgIns5 from "../assets/images/teaching/imgIns5.png";
import imgIns6 from "../assets/images/teaching/imgIns6.png";
import imgIns7 from "../assets/images/teaching/imgIns7.jpg";
import imgIns8 from "../assets/images/teaching/imgIns8.jpg";
import imgIns9 from "../assets/images/teaching/imgIns9.jpg";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import cisfile from "assets/files/SELF-EVALUATION-USING-IB-STANDARDS-AND-PRACTICES-EVIDENCE-DURING-AUGUST-2021-ORIENTATION.pdf";
const TURQUOISE = "#06b6d4";
const Teaching = () => {
  const bottom = useBreakpointValue({ base: "-90px", md: "calc(50% - 40px)" });
  const side = useBreakpointValue({ base: "30%", md: "-60px" });
  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IconButton
        className="slick-arrow"
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        bottom={bottom}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={onClick}
        rounded={"full"}
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
    );
  }

  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IconButton
        className="slick-arrow"
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        bottom={bottom}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={onClick}
        rounded={"full"}
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
    );
  }
  var settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <PageSlideFade>
      <StaggerChildren>
        {/* introduction */}
        <MotionBox>
          <Heading id="introduction">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Introduction
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                I effectively apply the most up-to-date, research-based
                strategies to address the needs of diverse learners learned from
                the continuous upskill workshops done as IB Workshop Leader and
                School Visiting Team Member in IB PYP, MYP, DP and other
                curricula workshops. I add these new strategies to the best
                strategies that I have learned over the years, developing a
                unique combination of the best teaching strategies from the best
                practices in the past and present critical thinking and
                inquiry-based strategies. Kindly refer to the recordings in my
                portfolio for demonstrations about how I teach.
              </Text>
              <br />
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                In management positions I lead a curricular system based on the
                most recent understanding about learning, including developing,
                implementing, and monitoring curriculum and learner progress.
                This is done following the most up to date IB and CIS standards
                and using the learning platform, e.g., ManageBac effectively.
                Kindly refer to the attached self-studies using the IB and CIS
                standards.
              </Text>
              <br />
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                Furthermore, I teach teachers to teach with inhouse workshops
                using the approaches knowledge and skills learned as IB workshop
                leader. This is followed up with personal class visits using
                these standards as assessment criteria of how teachers are
                teaching. After the visit the teacher and I collaboratively
                decide upon an area for improvement at the next visit the next
                week. Doing this, teachers are given the professional guidance
                to improve continuously. Teachers are also encouraged to do as
                many professional development workshops as possible to broaden
                their understanding and add to their existing teaching strategy
                base. I get as much job satisfaction from seeing the
                professional development of teachers as seeing kids grow
                academically.
              </Text>
            </Box>
          </CardTransition>
          <Box
            fontSize={{ base: "md", lg: "lg" }}
            paddingTop={4}
            paddingBottom={["100px", "100px", 10]}
          >
            <Slider {...settings}>
              <Box className="box-slider">
                <Box
                  as="iframe"
                  src="https://www.youtube.com/embed/oj1rPdQgNS8?modestbranding=1"
                />
              </Box>
              <Box className="box-slider">
                <Box
                  as="iframe"
                  src="https://www.youtube.com/embed/gIkAEyLgkTM?modestbranding=1"
                />
              </Box>
            </Slider>
          </Box>
        </MotionBox>
        {/* global-citizenship */}
        <MotionBox>
          <Heading id="global-citizenship">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Global Citizenship
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                Global citizenship became part of my personality from a young
                age growing up in the rainbow nation of South Africa. Similarly,
                the students, families, teachers, and others I work with, in
                international schools come from many different cultural, ethnic,
                and educational backgrounds. I proactively address unconscious
                bias and overt racism through all my interactions and the
                processes that I am involved with my personal example.
              </Text>
              <br />
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                This is taken to a higher level with workshopping students and
                teachers, sharing the approaches, knowledge, and skills learned
                in the IB ‘International mindedness’ workshop at every school I
                work. The workshop is based on Edward Hall’s cultural iceberg
                model. According to this theory the flags, folklore, festivals,
                fashions, and food clearly visible above the waterline is based
                on the ideas, preferences, and priorities that comprise
                individual attitudes and values below the waterline. This is
                what individuals in the culture have learned about what is
                acceptable and unacceptable behavior in society. The first phase
                of the workshop is connecting the culture groups with their own
                culture to respect their own culture and identify what is unique
                about their culture. This is done by dividing the group into
                cultural groups in the school community. They explore their own
                culture using the iceberg model. The next phase is to let each
                culture group present its culture to the main group so that the
                different groups learn more about each other. Special attention
                is given to making the other cultural groups aware of what is
                acceptable and unacceptable to each group so that they can be
                sensitives and respect each other. Extra special attention is
                given to respecting the host culture. The workshop culminates in
                the development of a school culture that respects all the
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
                and values below the waterline. This is what individuals in the
                culture have learned about what is acceptable and unacceptable
                behavior in society. The first step is dividing the group into
                culture groups who explore their own culture using the iceberg
                model. Each culture group presents its culture to the main
                group. Special attention is given to respecting the host
                culture. The workshop culminates with the development of a
                school culture that respects all the different cultures in the
                school.
              </Text>
              <br />
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                Furthermore, I demonstrate the IB Learner Profile attributes and
                encourage my students to do so by rewarding them with IB Learner
                profile certificates when they do so. My policy is to give every
                student at least one certificate every quarter because every
                child does something right somewhere. It is beautiful to observe
                how the students develop these attributes and see the personal
                growth when they reflect upon their development. Furthermore, I
                demonstrate the IB Learner Profile attributes and encourage my
                students to do so by rewarding them with IB Learner profile
                certificates when they do so. My policy is to give every student
                at least one certificate every quarter because every child does
                something right somewhere. It is beautiful to observe how the
                students develop these attributes and see the personal growth
                when they reflect upon their development. Additionally, students
                and teachers are encouraged to participate in after-school
                activities, because through playing in the same sports team or
                band students really get to know each other, bond, and overcome
                prejudices they may have had.
              </Text>
            </Box>
          </CardTransition>
          <Box
            fontSize={{ base: "md", lg: "lg" }}
            paddingTop={4}
            paddingBottom={["100px", "100px", 10]}
          >
            <Slider {...settings}>
              <Box className="box-slider">
                <Box
                  as="iframe"
                  src="https://www.youtube.com/embed/n6Mz0vWigUQ?modestbranding=1"
                />
              </Box>
              <Box className="box-slider">
                <Image src={imgGC1} />
                <Text>
                  Teachers are workshopped to become international minded global
                  citizens.
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgGC2} />
                <Text>
                  Students are taught to see the global connection in everything
                  they learn.
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgGC3} />
                <Text>
                  Encouraging Global Citizanship with IB Learner Profile
                  certificates
                </Text>
              </Box>
            </Slider>
          </Box>
        </MotionBox>
        {/* leading */}
        <MotionBox>
          <Heading id="leading">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Leading and supporting in a culture of transition and mobility
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                A distinctive feature of many international schools is that
                families and teachers frequently relocate. I Support and lead
                learning in this modern-day culture of continuous transition and
                mobility by empowering students and teachers with the
                approaches, knowledge, and skills of the IB learner profile
                attributes (inquirers, knowledgeable, thinkers, communicators,
                principled, open-minded, caring, risk-takers, balanced, and
                reflective). The development of these attributes is encouraged
                by awarding IB Learner Profile certificates to students who
                demonstrate these attributes and teachers who model them. The
                policy is to give every student and teacher at least one
                certificate every quarter because every child and teacher does
                something right somewhere at some time. Awarding these
                certificates, this is recognized and celebrated by the group and
                help up as a good example to encourage further development by
                everybody. There are variations of these attributes in other
                curriculums. If it is not present in the school curriculum, I
                teach and encourage it informally. Developing these attributes
                makes it easier to relocate effectively.
              </Text>
              <br />
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                Furthermore, I am always involved with extracurricular
                activities, because wherever students move there, they can
                befriend other students through sport and cultural activities.
                The interaction on the sports field and cultural activities like
                the choir, band, etc. often lead to long-lasting friendships and
                social support structures off the field. The social skills
                learned transfer across time and space into being socially
                accepted in the new school community.
              </Text>
            </Box>
          </CardTransition>
          <Box
            fontSize={{ base: "md", lg: "lg" }}
            paddingTop={4}
            paddingBottom={["100px", "100px", 10]}
          >
            <Slider {...settings}>
              <Box className="box-slider">
                <Box
                  as="iframe"
                  src="https://www.youtube.com/embed/n6Mz0vWigUQ?modestbranding=1"
                />
              </Box>
              <Box className="box-slider">
                <Image src={imgL1} />
                <Text>
                  Doing Kung Fu with the students in the Ip Man museum in China.
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgL2} />
                <Text>
                  Students with their IB Learner Profile certificates.
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgL3} />
                <Text>
                  Teachers with their IB Learner Profile certificates.
                </Text>
              </Box>
            </Slider>
          </Box>
        </MotionBox>
        {/* collaboration */}
        <MotionBox>
          <Heading id="collaboration">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Collaboration with the school community and building morale
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                International schools are far more than just schools. They are
                communities, working and living closely together. The spirit and
                practice of teamwork are essential. As a team member and leader,
                I am totally committed to creating and nurturing a warm, happy,
                collaborative, and productive community. This is done with
                positive interaction and initiatives with all members of the
                school community: students, colleagues, parents, leaders, and
                the Board. Being positive and cheerful by nature I do things in
                a kind, caring, supportive and collaborative manner. The kind
                and caring way in which we do things is more important than the
                inevitable success. Therefore, I support every member of the
                school community whenever and wherever I can and sincerely
                celebrate the success of every student, colleague, parent, and
                leader. Good work, even doing routine tasks must never be taken
                for granted. It must be recognized, shared, and celebrated.
                Every child did something right at some time and it is policy to
                award each student with at least one IB Learner Profile
                certificate at an assembly every quarter. Photographs are taken
                and published on the school Facebook page so that family and
                friends at home and abroad can share in the joy. Every teacher
                is awarded an IB Learner Profile certificate at the end of every
                quarter for demonstrating the IB Learner profile attributes to
                the school community and giving recognition for his/her unique
                contribution to the success of the team. Furthermore, I try to
                catch staff doing things RIGHT and take pictures of good
                practices seen during class visits and teachers doing their
                duties. These pictures are shared on the faculty group and
                celebrated as good examples at staff meetings. This
                collaborative approach to celebrating good practice fosters a
                positive team spirit and school culture where everybody is
                focused on effective teaching and learning as the success
                criteria with which we judge ourselves, that relationships
                matter and that international mindedness is fundamental.
              </Text>
            </Box>
          </CardTransition>
          <Box
            fontSize={{ base: "md", lg: "lg" }}
            paddingTop={4}
            paddingBottom={["100px", "100px", 10]}
          >
            <Slider {...settings}>
              <Box className="box-slider">
                <Image src={imgCol1} />
                <Text>Collaboration meeting with staff.</Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgCol2} />
                <Text>
                  Parent collaboration meeting about IB MYP authorization.
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgCol3} />
                <Text>Parent information meeting.</Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgCol4} />
                <Text>
                  Teachers with their IB Learner Profile certificates.
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgCol5} />
                <Text>
                  A teacher recieving a certificate as appreciation of his good
                  work
                </Text>
              </Box>
            </Slider>
          </Box>
        </MotionBox>
        {/* esl */}
        <MotionBox>
          <Heading id="esl">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                ESL: Teaching and leading the teaching of English to learners
                with diverse language backgrounds in the mainstream classroom
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                International schools are far more than just schools. They are
                communities, working and living closely together. The spirit and
                practice of teamwork are essential. As a team member and leader,
                I am totally committed to creating and nurturing a warm, happy,
                collaborative, and productive community. This is done with
                positive interaction and initiatives with all members of the
                school community: students, colleagues, parents, leaders, and
                the Board. Being positive and cheerful by nature I do things in
                a kind, caring, supportive and collaborative manner. The kind
                and caring way in which we do things is more important than the
                inevitable success. Therefore, I support every member of the
                school community whenever and wherever I can and sincerely
                celebrate the success of every student, colleague, parent, and
                leader. Good work, even doing routine tasks must never be taken
                for granted. It must be recognized, shared, and celebrated.
                Every child did something right at some time and it is policy to
                award each student with at least one IB Learner Profile
                certificate at an assembly every quarter. Photographs are taken
                and published on the school Facebook page so that family and
                friends at home and abroad can share in the joy. Every teacher
                is awarded an IB Learner Profile certificate at the end of every
                quarter for demonstrating the IB Learner profile attributes to
                the school community and giving recognition for his/her unique
                contribution to the success of the team. Furthermore, I try to
                catch staff doing things RIGHT and take pictures of good
                practices seen during class visits and teachers doing their
                duties. These pictures are shared on the faculty group and
                celebrated as good examples at staff meetings. This
                collaborative approach to celebrating good practice fosters a
                positive team spirit and school culture where everybody is
                focused on effective teaching and learning as the success
                criteria with which we judge ourselves, that relationships
                matter, and that international mindedness is fundamental.
              </Text>
              <br />
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                As a leader, I workshop staff with the before mentioned
                approaches, knowledge, and skills during the orientation program
                before school starts. It is made clear from the start that every
                teacher is also a language teacher. This is followed up by
                monitoring, supporting, and guiding staff in including the
                vocabulary section in their planning and explicitly teaching the
                vocabulary students need to overcome language barriers to
                understanding the work.
              </Text>
            </Box>
          </CardTransition>
          <Box
            fontSize={{ base: "md", lg: "lg" }}
            paddingTop={4}
            paddingBottom={["100px", "100px", 10]}
          >
            <Slider {...settings}>
              <Box className="box-slider">
                <Image src={imgESL1} />
                <Text>
                  A student posting his vocabulary poster on the noticeboard.
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgESL2} />
                <Text>Language Policy</Text>
              </Box>
            </Slider>
          </Box>
        </MotionBox>
        {/* curriculum */}
        <MotionBox>
          <Heading id="curriculum">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Curriculum development and monitoring processes
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                Most international schools are private and independent. So, much
                of the curriculum design work is often done by me. I have many
                years of experience in developing, teaching, and monitoring the
                curriculum myself for the specific school community where I am
                working. Careful planning of each unit and each individual
                lesson facilitates good teaching. First, the topic is formulated
                (e.g., Numbers and number systems). Then the purpose of the
                inquiry is established with the identification of the key and
                related concepts. This is followed by the inquiry: conceptual
                understanding, global context, formulating the statement of
                inquiry, and the inquiry questions that are factual, conceptual,
                and debatable. I establish the curriculum aims, standards, and
                benchmarks as well as the content (consisting of topics,
                knowledge, and skills). The relevant ATL skills and IB Learner
                profile are identified. The integration with international
                mindedness and academic integrity is established. Connections
                with language development, information communication technology
                as well as Service as Action are made. The identification and
                explicitly teaching of the keywords students must know and
                understand to overcome the language barrier is critical to
                success. A variety of formative and summative assessment
                strategies are developed. Then I plan the learning experiences
                and strategies, considering the prior learning experiences.
                Student expectations from this unit are elicited and noted. In
                my experience GRASP (Goal, Role, Audience, Scenario, Product,
                Standards) tasks and assessments are highly effective. I reflect
                prior during and after studying the unit. It is important to use
                stimulating resources to ignite and maintain student interest. I
                make extensive use of online learning platforms and resources
                like ManageBac to keep students and their parents well informed
                about what we plan to do in the coming week and their learning
                progress. Using the textbook (if there is one) effectively
                facilitates parent support at home.
              </Text>
              <br />
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                Leading my team, I take full responsibility for student progress
                consistent with the school mission and curricular goals. I lead
                by the above example and ensure that the curricular system is
                based on the most recent understanding about learning, including
                development, implementing, and monitoring curriculum and learner
                progress. This is done following the most up-to-date IB and CIS
                standards and using the learning platform, e.g., ManageBac
                effectively. Kindly refer to the attached self-studies using the
                IB and CIS standards. Furthermore, I teach teachers to teach
                with in-house workshops using the approaches knowledge and
                skills learned as IB workshop leader. This is followed up with
                personal class visits using these standards as assessment
                criteria of how teachers are teaching. After the visit, the
                teacher and I collaboratively decide upon an area for
                improvement at the next visit next week. By doing this, teachers
                are given professional guidance to improve continuously.
                Teachers are also encouraged to do as many professional
                development workshops as possible to broaden their understanding
                and add to their existing teaching strategy base.
              </Text>
              <br />
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                I get as much job satisfaction from seeing the professional
                development of teachers as seeing kids grow academically.
              </Text>
            </Box>
          </CardTransition>
        </MotionBox>
        {/* reporting */}
        <MotionBox>
          <Heading id="reporting">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Reporting and feedback about student progress
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                Parents send their children to school to learn. I take full
                responsibility for teaching them and always adjust the lesson
                when required. During lessons, I continuously assess the
                understanding of the students with questions and answers as well
                as monitor how effectively they complete their tasks inside the
                classroom. At the end of all lessons, students reflect on what
                they have learned during the lesson and explain what they have
                done. A formative assessment is done at the end of every week.
                The format of these formative assessments varies to make it
                exciting. The results of these formative assessments inform the
                instruction of the next week. The results are sent to parents
                with clear explanations about what the student did well with and
                what should be focused on for further improvement. Students and
                their parents are given continuous feedback about progress. I
                build differentiation into the lesson plans to address the
                different needs and abilities of my students. Students and their
                parents are given continuous feedback about progress. The
                formative and summative assessments during teaching results are
                communicated with students and their parents as swiftly as
                possible. I do not just give a grade, but the verbal grade
                descriptor and a verbal comment celebrating what students did
                well and what should be improved with guidance about how it can
                be improved. Consequently, my students always do their best and
                achieve good grades in internal as well as external assessments.
                I train my team to do this, monitor their progress, and support
                them whenever and wherever necessary.
              </Text>
            </Box>
          </CardTransition>
          <Box
            fontSize={{ base: "md", lg: "lg" }}
            paddingTop={4}
            paddingBottom={["100px", "100px", 10]}
          >
            <Slider {...settings}>
              <Box className="box-slider">
                <Image src={imgRep1} />
                <Text>
                  Student progress report with traffic light color coded grade
                  descriptors.
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgRep2} />
                <Text>
                  Student progress report is explained to the parents in all the
                  languages of the school.
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgRep3} />
                <Text>
                  Student progress is reported and discussed with each parent
                  personally.
                </Text>
              </Box>
            </Slider>
          </Box>
        </MotionBox>
        {/* service-delivery */}
        <MotionBox>
          <Heading id="service-delivery">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Service delivery: Manage and monitor the day-to-day delivery of
                services
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                I believe in collaborative planning with input from all relevant
                stakeholders in an appropriate manner to develop corporate
                responsibility. During the planning, it is clarified exactly who
                is responsible, what is required, where it must happen, when the
                target date for completion is, and how everything should be
                done. Then I continuously monitor. The focus is on catching
                people doing things right. I celebrate staff performing their
                routine duties by taking photographs and posting them on
                WhatsApp groups.
              </Text>
            </Box>
          </CardTransition>
          <Box
            fontSize={{ base: "md", lg: "lg" }}
            paddingTop={4}
            paddingBottom={["100px", "100px", 10]}
          >
            <Slider {...settings}>
              <Box className="box-slider">
                <Image src={imgSD1} />
                <Text>
                  Teaching parents and their children to monitor progress using
                  Managebac.
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgSD2} />
                <Text>
                  Catching a teacher doing things right doing her duty.
                </Text>
              </Box>
            </Slider>
          </Box>
        </MotionBox>
        {/* reflection */}
        <MotionBox>
          <Heading id="reflection">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Reflect systematically on practice and learn from it
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                I lead my team with my own example of continuous reflection. I
                share this verbally at the meetings and in writing on ManageBac.
                At the start of every year, I lead the orientation program of
                new teachers as well as the teachers who were at the school
                during the previous year. Part of the program is always the
                annual collaborative review of the existing policies and
                procedures for behavior management, academic honesty
                (integrity), inclusion, assessment, and the language policy. The
                staff who were applied these policies the previous years have
                the opportunity to reflect and share what they saw work in
                practice and how it can be improved. New staff has the
                opportunity to share their ideas which gives a vital fresh look
                at the same challenges. Furthermore, we also do a
                self-evaluation about how well we keep to following the latest
                IB standards and practices (currently we are using the version
                published in 2020). This year we also did a self-study of our
                school using the CIS domains as part of the CIS accreditation
                process. This process of continuous reflection and reminding
                ourselves and each other about the standards we should be
                keeping to is followed through during the year continuously at
                faculty meetings.
              </Text>
            </Box>
          </CardTransition>
          <Box
            fontSize={{ base: "md", lg: "lg" }}
            paddingTop={4}
            paddingBottom={["100px", "100px", 10]}
          >
            <Slider {...settings}>
              <Box className="box-slider">
                <Image src={imgRef1} />
                <Text>Reflection about the teaching of a Math Unit.</Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgRef2} />
                <Text>
                  Reflection about workshop given to school principal’s feedback
                  forms.
                </Text>
              </Box>
            </Slider>
          </Box>
        </MotionBox>
        {/* marketing */}
        <MotionBox>
          <Heading id="marketing">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Marketing the school
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                A good product does not necessarily sell itself anymore. A
                critical success factor for schools today is marketing because
                international education became so competitive. In my experience,
                the most effective marketing strategy is AIDAS (Attention,
                Interest, Desire, Action, and Satisfaction). The first step is
                to get the attention of potential students and their parents by
                distributing information about the school with brochures,
                putting up posters, advertising in newspapers and on television.
                Follow this up with a booth at the shopping mall frequented by
                the target market. The attention of potential students can be
                drawn with coloring pictures, games, or computer games. While
                the children are playing the students and their parents see the
                posters and brochures at the booth and get interested in the
                school. The staff on duty at the booth make personal contact,
                explain the benefits of the school, the curriculum taught, and
                ‘sell’ the school. The students and their parents are invited to
                an open day at the school when they are taken on a tour of the
                school facilities and demo lessons. This creates the desire of
                the students and parents to take action and register to be
                enrolled at the school. The most important step is ensuring that
                students and their parents are satisfied with the move they
                made. This is done by personally following up how the first day
                and first week went with the student as well as their parents
                and taking corrective action if necessary.
              </Text>
            </Box>
          </CardTransition>
          <Box
            fontSize={{ base: "md", lg: "lg" }}
            paddingTop={4}
            paddingBottom={["100px", "100px", 10]}
          >
            <Slider {...settings}>
              <Box className="box-slider">
                <Box
                  as="iframe"
                  src="https://www.youtube.com/embed/Ht768tgsoVs?modestbranding=1"
                />
              </Box>
              <Box className="box-slider">
                <Image src={imgMkt1} />
                <Text>
                  Marketing the school booth at shopping mall frequented by the
                  target market.
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgMkt2} />
                <Text>
                  TV interview done at historic Citadel to market the good work
                  done at the school.
                </Text>
              </Box>
            </Slider>
          </Box>
        </MotionBox>
        {/* accountability */}
        <MotionBox>
          <Heading id="accountability">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Accountability for learning
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                As an educational leader, I prioritize student progress in
                alignment with the school mission and curricular goals. This is
                achieved with strategic planning to deliver the best possible
                service to the school. This includes finding out what the school
                mission is and what my strengths and weaknesses are in realizing
                the mission. The next step is identifying what the external
                opportunities and threats are towards realizing the mission.
                Then I develop specific action plans to promote the school
                mission. As principal, I ensure the inclusion of all relevant
                stakeholders in an appropriate manner developing a shared vision
                to realize the school mission. This ensures the awakening of
                corporate responsibility. It includes careful planning of who is
                responsible for which outcomes and when the target dates are.
                Organizing the resources, especially the human and financial
                resources, towards optimal use is very important. Leading the
                execution of the plans by setting a personal example is part of
                my personal leadership style. That is why I always teach a few
                classes even in leadership positions. Furthermore, I
                continuously monitor the progress of each member of the team
                personally to support whenever and wherever necessary. Examples
                of doing this are the many school’s Facebook and website
                articles I wrote, parent information meetings, professional
                development sessions I led, policies and procedures I developed
                collaboratively with my team, minutes of staff meetings, and
                promotional material I developed for the school. Furthermore, I
                take accountability for learning to another level by leading
                school self-evaluation sessions during the orientation at the
                start of the year using the IB standards and practices and CIS
                standards as measuring tools. These self-evaluations are used as
                the foundation to develop the action plans for the year.
              </Text>
            </Box>
          </CardTransition>
          <Box
            fontSize={{ base: "md", lg: "lg" }}
            paddingTop={4}
            paddingBottom={["100px", "100px", 10]}
          >
            <Slider {...settings}>
              <Box className="box-slider">
                <Box
                  as="iframe"
                  src="https://www.youtube.com/embed/Ht768tgsoVs?modestbranding=1"
                />
              </Box>
              <Box className="box-slider">
                <Image src={imgAcc1} />
                <Link download isExternal href={cisfile}>
                  <Text>
                    CIS Self Study August 2021 <ExternalLinkIcon mx="2px" />
                  </Text>
                </Link>
              </Box>
              <Box className="box-slider">
                <Image src={imgAcc2} />
                <Text>
                  TV interview done at historic Citadel to market the good work
                  done at the school.
                </Text>
              </Box>
            </Slider>
          </Box>
        </MotionBox>
        {/* inspirational */}
        <MotionBox>
          <Heading id="inspirational">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Inspirational visionary leadership
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                Because nobody is as powerful as everybody, I lead the design,
                leadership, and manage the organizational plan, operations, and
                resources to provide a productive and accountable environment
                for learning in a uniquely collaborative way. The result is
                student progress consistent with the school’s vision, mission,
                and curricular goals, which are prominently on display all over
                the school and referred to during lessons and meetings. I ensure
                processes and services are reflective of the most current
                research and thinking and we collaboratively do annual
                self-evaluations using the International Baccalaureate and
                Council of International Schools standards practices to inform
                our planning. Fundamental in my approach to leadership is
                planning, organizing, leading, and controlling a strategic plan
                with input from all relevant stakeholders in the school
                community (teachers, students, parents, management, and the
                governing body) in an appropriate manner. Collaboratively we
                decide how the internal strengths of the school can be
                strengthened further and the weaknesses are developed into
                strengths. From the master strategic plan, more detailed
                tactical plans are developed, considering, and managing the
                opportunities and threats from the external political, economic,
                social, technical, and legal environment. With each plan, it is
                collaboratively clarified who the responsible team leaders and
                members are when the target dates for each phase are as well as
                the budget within which it is completed. To ensure clarity and
                prevent misunderstandings the clearly articulated written
                organizational charts, policies, and procedures developed are
                widely communicated on multimedia platforms such as the school
                website, Facebook page, and school online platforms like
                ManageBac. At the core is developing and nurturing a climate and
                culture driven by the core values that learning is always the
                criteria for measuring effectiveness, relationships are
                important, and that international-minded global citizenship is a
                fundamental part of what we do. Personal experience repeatedly
                showed that this collaborative participation in the planning and
                organization develops corporate responsibility taken by all
                members of the school community for the success of ‘our’ school.
                People from apparently different backgrounds are united into a
                cohesive team committed to realizing a shared vision. I am aware
                of the different backgrounds people come from, but this approach
                mobilizes the talents, interests,s, and commitment of parents,
                staff, and students towards the common goal of excellence.
                Experience has shown that the best way of implementing such a
                plan is leading by example and personal involvement. There are
                high expectations of team members and challenging, but realistic
                targets are set. The systems, resources, and procedures are set
                in place to enable the effective and consistent progression of
                all staff and students. This promotes approaches to learning and
                teaching that engage and motivate students and demand their
                active participation as well as strengthening learning and
                teaching through a program of professional development and
                practical support. I personally monitor the progress of each
                individual and team, guiding and supporting them whenever and
                wherever necessary. I consistently model behavior in alignment
                with the school’s values and continuously improve to meet the
                challenges and opportunities of leading a high-performing
                school. Nobody is as powerful as everybody. My successful
                leadership track record is the result of collaborative
                leadership, unleashing the power of the team by implementing the
                above strategy.
              </Text>
            </Box>
          </CardTransition>
          <Box
            fontSize={{ base: "md", lg: "lg" }}
            paddingTop={4}
            paddingBottom={["100px", "100px", 10]}
          >
            <Slider {...settings}>
              <Box className="box-slider">
                <Image src={imgIns1} />
                <Text>Assessment Policy</Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgIns2} />
                <Text>Language Policy</Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgIns3} />
                <Text>Online teaching and learning</Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgIns4} />
                <Text>Behavior Management Policy</Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgIns5} />
                <Text>Academic Honesty (Integrity) Policy</Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgIns6} />
                <Text>Inclusion Policy</Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgIns7} />
                <Text>
                  Coordinating the evacuation of 1028 students from the building
                  safely during the fire drill
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgIns8} />
                <Text>
                  A teacher showing all her students evacuated the school safely
                  during a fire drill.
                </Text>
              </Box>
              <Box className="box-slider">
                <Image src={imgIns9} />
                <Text>
                  Coordinating the evacuation of more than a thousand students
                  from the school building doing the fire drill practice
                </Text>
              </Box>
            </Slider>
          </Box>
        </MotionBox>
        {/* assessment */}
        <MotionBox>
          <Heading id="assessment">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Assessment and curriculum leadership
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                It is my job to lead a curricular system based on the most
                recent understanding of IB and CIS learning, including
                developing, implementing, and monitoring curriculum and learner
                progress.
              </Text>
              <br />
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                The most important resource in education is the teachers. The
                river cannot run deeper than the source. I plan strategically
                what the human resource needs of the school are using the
                current and projected enrollment figures. After carefully
                identifying which teaching and support positions must be filled,
                the job description is developed. Then the vacancy is advertised
                internally and externally to attract the best candidates locally
                and abroad. After screening the applications, the best-fitting
                candidates are invited for interviews. The best candidate is
                offered a contract. Upon accepting the contact offer everything
                possible is done ensure a smooth movement to the school and
                induction.
              </Text>
            </Box>
          </CardTransition>
        </MotionBox>
        {/* communication */}
        <MotionBox>
          <Heading id="communication">
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Communication
              </Header>
            </Flex>
          </Heading>
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
              <Text fontSize={{ base: "sm" }} textAlign={"justify"}>
                A key factor to achieving success is always communicating with
                every member of the school community in a clear, concise, civil,
                and coherent manner across different communication media. As a
                faculty, we discuss and develop the communication policy for the
                year during the orientation program before school starts. This
                agreement is signed by everybody and prominently on display
                everywhere and referred to often to remind us about how we
                communicate with each other. The official medium of
                communication with students and parents is ManageBac. So every
                teacher, student, and parent is thoroughly trained in using this
                program. Other communication media are WhatsApp groups,
                Facebook, and the school website.
              </Text>
            </Box>
          </CardTransition>
        </MotionBox>
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default Teaching;
