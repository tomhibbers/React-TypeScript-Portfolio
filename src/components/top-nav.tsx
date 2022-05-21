import * as React from "react";
import { HashLink } from 'react-router-hash-link';
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
  Stack
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
      as={RouterNavLink}
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
              <Avatar
                as={Link}
                size={"sm"}
                href={"/portfolio"}
                src={UserIcon}
              />
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
                  {/* <HashLink to="/teaching#global-citizenship">
                    <MenuItem>
                      <HStack>
                        <Text>Teaching</Text>
                      </HStack>
                    </MenuItem>
                  </HashLink> */}
                  <HashLink as={RouterNavLink} to="/teaching#teaching">
                    <MenuItem>
                      <HStack>
                        <Text>Teaching</Text>
                      </HStack>
                    </MenuItem>
                  </HashLink>
                  <HashLink as={RouterNavLink} to="/teaching#global-citizenship">
                    <MenuItem>
                      <HStack>
                        <Text>Global Citizenship</Text>
                      </HStack>
                    </MenuItem>
                  </HashLink>
                  <Link as={RouterNavLink} to="/teaching#leading">
                    <MenuItem>
                      <HStack>
                        <Text>Leading</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/teaching#collaboration">
                    <MenuItem>
                      <HStack>
                        <Text>Collaboration</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/teaching#esl">
                    <MenuItem>
                      <HStack>
                        <Text>ESL</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/teaching#curriculum">
                    <MenuItem>
                      <HStack>
                        <Text>Curriculum</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/teaching#reporting">
                    <MenuItem>
                      <HStack>
                        <Text>Reporting</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/teaching#service-delivery">
                    <MenuItem>
                      <HStack>
                        <Text>Service Delivery</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/teaching#reflection">
                    <MenuItem>
                      <HStack>
                        <Text>Reflection</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/teaching#marketing">
                    <MenuItem>
                      <HStack>
                        <Text>Marketing</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/teaching#accountability">
                    <MenuItem>
                      <HStack>
                        <Text>Accountability</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/teaching#inspirational">
                    <MenuItem>
                      <HStack>
                        <Text>Inspirational</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to="/teaching#assessment">
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
            <Stack as={"nav"} spacing={4}>
              {mobileLinks.map((link, index) => (
                <NavLink
                  index={index as any as string}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
