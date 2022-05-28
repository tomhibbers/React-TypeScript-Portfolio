import * as React from "react";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Tag,
  Link,
  Tooltip,
  useColorModeValue,
  Icon,
  Flex,
  Image,
  Badge,
  Box
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { getTagColor } from "style/theme";
import dev from "assets/images/logos/dev.png";
import dev2 from "assets/images/logos/dev_white.png";
import { CardTransition } from "components/page-transitions";
import {
  FaMedium
} from "react-icons/fa";
type PostCardProps = {
  profile: {
    ptitle:string,
    avatar:string,
    profileurl:string,
  },
  item:any,
};
// export interface PostCardProps {
//   profile: {
//     ptitle:string,
//     avatar:string,
//     profileurl:string,
//   },
//   item:any,
// }
const PostCard = ({ item, profile }: PostCardProps) => {
  const textColor = useColorModeValue("gray.500", "gray.200");
  const devIcon = useColorModeValue(dev, dev2);
  function toText(block) {
      let tag = document.createElement('div');
      tag.innerHTML = block;
      block = tag.innerText;
      return block;
  }
  // React.useEffect(() => {
  // }, []);
  return (
    <CardTransition>
      <VStack
        spacing={1}
        p={4}
        isExternal
        _hover={{ shadow: "md", textDecoration: "none" }}
        borderWidth="1px"
        position="relative"
        rounded="md"
        bg={useColorModeValue("white", "gray.800")}
        align="left"
      >
        {profile.profileurl ? (
          <Tooltip hasArrow label="Dev.to" placement="top">
            <Icon as={FaMedium} 
              width="2rem"
              height="2rem"
              position="absolute"
              color="#cbd5e0"
              right="0.5rem"
              top="-14px" />
          </Tooltip>
        ) : (
          <Tooltip hasArrow label="mahmad.me" placement="top">
            <Box position="absolute" color="#cbd5e0" right="0.5rem" top="-14px">
              <Badge ml="1" variant="solid" colorScheme="blackAlpha">
                Website
              </Badge>
            </Box>
          </Tooltip>
        )}
        <Heading fontSize="lg" align="left" mt={0}>
          {item.link ? (
            <Text as={Link} href={item.link} target="_blank">
              {item.title}
            </Text>
          ) : (
            <Link as={NavLink} to={item.link}>
              {item.title}
            </Link>
          )}
        </Heading>
        <Text align="left" fontSize="md" noOfLines={4} color={textColor}>
          {toText(item.content)}
        </Text>
      </VStack>
    </CardTransition>
  );
};

export default PostCard;
