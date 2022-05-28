import * as React from "react";
import { Box, Stack } from "@chakra-ui/react";
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
  const [mitem, mitemset] = React.useState([]);
  const [mprofile, mprofileset] = React.useState({
    ptitle: "",
    avatar: "",
    profileurl: "",
  });
  const rss2json =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40joshuagauthreaux";
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
        return (
          blog.categories.length > 0 && (
            <BlogTile key={blog.pubDate} blogData={blog} />
          )
        );
      })
    );
  }
  // const mediumUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mehulkothari05";
  // function getBlogPosts() {
  //   axios
  //     .get(mediumUrl)
  //     .then((response) => response.data)
  //     .then((data) => {
  //       const avatar = data.feed.image;
  //       const profileLink = data.feed.link;
  //       const res = data.items; //This is an array with the content. No feed, no info about author etc..
  //       const posts = res.filter((item) => item.categories.length > 0);
  //       const title = data.feed.title;
  //       mitemset(posts);
  //       mprofileset({
  //         ...mprofile,
  //         ptitle: title,
  //         profileurl: profileLink,
  //         avatar: avatar,
  //       });
  //     });
  // }
  // React.useEffect(() => {
  //   console.log("effect");
  //   // getBlogPosts();
  // }, [mitem]);
  return (
    <PageSlideFade>
      <Header underlineColor={TURQUOISE} mt={0} mb={0}>
        Featured Articles
      </Header>
      <StaggerChildren>
        {displayBlogs()}
        {/* <Stack spacing={4} mt={12}>
          {mitem.map((post, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <PostCard item={post} profile={mprofile} />
            </MotionBox>
          ))}
        </Stack> */}
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default Posts;
