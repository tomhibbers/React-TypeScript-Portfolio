import * as React from "react";
import { HashLink } from "react-router-hash-link";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Text,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import UserIcon from "assets/images/user_icon.jpg";
import { BiChevronDown } from "react-icons/bi";

const mobileLinks = [
  { name: "About", path: "/about" },
  { name: "Teaching", path: "/teaching" },
  { name: "Blog", path: "/blog" },
];

interface NavLinkProps {
  index?: string;
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <Link
      as={HashLink}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.900"),
      }}
      _activeLink={{
        color: useColorModeValue("blue.500", "blue.200"),
      }}
      onClick={() => props.onClose()}
      to={props.path}
    >
      {props.name}
    </Link>
  );
};

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.900"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.700")}
        px={4}
        boxShadow={"lg"}
        position="sticky"
        zIndex={1000}
        top="0"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["90%", "85%", "80%"]}
          maxW={800}
          mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Avatar as={Link} size={"sm"} href={"/"} src={UserIcon} />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink name="About" path="/about" onClose={onClose} />
              <NavLink name="Blog" path="/blog" onClose={onClose} />
              <Menu>
                <MenuButton
                  zIndex={1000}
                  as={Button}
                  variant="ghost"
                  size="sm"
                  px={2}
                  py={1.5}
                  fontSize={"1em"}
                  rounded={"md"}
                  height={"auto "}
                  _hover={menuProps}
                  _expanded={menuProps}
                  _focus={{ boxShadow: "outline" }}
                  rightIcon={<BiChevronDown size={18} />}
                >
                  Teaching
                </MenuButton>
                <MenuList zIndex={1000}>
                  <Link as={HashLink} to="/teaching#introduction">
                    <MenuItem>
                      <HStack>
                        <Text>Introduction</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={HashLink} to="/teaching#global-citizenship">
                    <MenuItem>
                      <HStack>
                        <Text>Global Citizenship</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={HashLink} to="/teaching#global-citizenship">
                    <MenuItem>
                      <HStack>
                        <Text>Leading</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={HashLink} to="/teaching#collaboration">
                    <MenuItem>
                      <HStack>
                        <Text>Collaboration</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={HashLink} to="/teaching#esl">
                    <MenuItem>
                      <HStack>
                        <Text>ESL</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={HashLink} to="/teaching#curriculum">
                    <MenuItem>
                      <HStack>
                        <Text>Curriculum</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={HashLink} to="/teaching#reporting">
                    <MenuItem>
                      <HStack>
                        <Text>Reporting</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={HashLink} to="/teaching#service-delivery">
                    <MenuItem>
                      <HStack>
                        <Text>Service Delivery</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={HashLink} to="/teaching#reflection">
                    <MenuItem>
                      <HStack>
                        <Text>Reflection</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={HashLink} to="/teaching#marketing">
                    <MenuItem>
                      <HStack>
                        <Text>Marketing</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={HashLink} to="/teaching#accountability">
                    <MenuItem>
                      <HStack>
                        <Text>Accountability</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={HashLink} to="/teaching#inspirational">
                    <MenuItem>
                      <HStack>
                        <Text>Inspirational</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={HashLink} to="/teaching#assessment">
                    <MenuItem>
                      <HStack>
                        <Text>Assessment</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={800}
            display={["inherit", "inherit", "none"]}
          >
            <Stack
              as={"nav"}
              spacing={4}
              // alignItems={"center"}
            >
              <NavLink name="About" path="/about" onClose={onClose} />
              <NavLink name="Blog" path="/blog" onClose={onClose} />
              <Accordion allowToggle>
                <AccordionItem borderBottom={"0px"} borderTop={"0px"}>
                  <AccordionButton px={2} py={1}>
                    <Box flex="1" textAlign="left">
                      <Text fontSize={{ base: "lg" }}>Teaching</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} overflowY="auto" maxHeight="300px">
                    <Stack
                      paddingTop={2}
                      as={"nav"}
                      spacing={4}
                      // alignItems={"center"}
                    >
                      <Link as={HashLink} to="/teaching#introduction" onClick={onClose}>
                        <HStack>
                          <Text>Introduction</Text>
                        </HStack>
                      </Link>
                      <Link as={HashLink} to="/teaching#global-citizenship" onClick={onClose}>
                        <HStack>
                          <Text>Global Citizenship</Text>
                        </HStack>
                      </Link>
                      <Link as={HashLink} to="/teaching#global-citizenship" onClick={onClose}>
                        <HStack>
                          <Text>Leading</Text>
                        </HStack>
                      </Link>
                      <Link as={HashLink} to="/teaching#collaboration" onClick={onClose}>
                          <HStack>
                            <Text>Collaboration</Text>
                          </HStack>
                      </Link>
                      <Link as={HashLink} to="/teaching#esl" onClick={onClose}>
                          <HStack>
                            <Text>ESL</Text>
                          </HStack>
                      </Link>
                      <Link as={HashLink} to="/teaching#curriculum" onClick={onClose}>
                          <HStack>
                            <Text>Curriculum</Text>
                          </HStack>
                      </Link>
                      <Link as={HashLink} to="/teaching#reporting" onClick={onClose}>
                          <HStack>
                            <Text>Reporting</Text>
                          </HStack>
                      </Link>
                      <Link as={HashLink} to="/teaching#service-delivery" onClick={onClose}>
                          <HStack>
                            <Text>Service Delivery</Text>
                          </HStack>
                      </Link>
                      <Link as={HashLink} to="/teaching#reflection" onClick={onClose}>
                          <HStack>
                            <Text>Reflection</Text>
                          </HStack>
                      </Link>
                      <Link as={HashLink} to="/teaching#marketing" onClick={onClose}>
                          <HStack>
                            <Text>Marketing</Text>
                          </HStack>
                      </Link>
                      <Link as={HashLink} to="/teaching#accountability" onClick={onClose}>
                          <HStack>
                            <Text>Accountability</Text>
                          </HStack>
                      </Link>
                      <Link as={HashLink} to="/teaching#inspirational" onClick={onClose}>
                          <HStack>
                            <Text>Inspirational</Text>
                          </HStack>
                      </Link>
                      <Link as={HashLink} to="/teaching#assessment" onClick={onClose}>
                          <HStack>
                            <Text>Assessment</Text>
                          </HStack>
                      </Link>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
