import * as React from "react";
import { Box, Flex, Grid, GridItem, SimpleGrid, Stack } from "@chakra-ui/react";
import { articles } from "data/posts/articles";
import PostCard from "./post-card";
import { PageSlideFade, StaggerChildren } from "components/page-transitions";
import Header from "components/header";
import { MotionBox } from "components/motion";
import axios from "axios";
import BlogTile from "./blog-tile";

const TURQUOISE = "#06b6d4";

const Posts = () => {
  const [myBlog, setMyBlog] = React.useState(null);
  
  const rss2json =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40thomasdhibbers";
  React.useEffect(() => {
    fetch(rss2json)
      .then((res) => res.json())
      .then((data) => {
        setMyBlog(data);
        // console.log(data);
      });
  }, [rss2json]);
  function displayBlogs() {
    // console.log(myBlog)
    return (
      myBlog &&
      myBlog.items &&
      myBlog.items.map((blog) => {
        return <BlogTile key={blog.pubDate} blogData={blog} />;
      })
    );
  }
  return (
    <PageSlideFade>
      <Header underlineColor={TURQUOISE} mt={0} mb={0}>
        Featured Articles
      </Header>
      <StaggerChildren>
        <SimpleGrid mt={50} mb={50} minChildWidth="250px" spacing="40px">
          {displayBlogs()}
        </SimpleGrid>
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default Posts;
