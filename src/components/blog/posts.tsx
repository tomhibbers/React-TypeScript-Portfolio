import * as React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { articles } from "data/posts/articles";
import PostCard from "./post-card";
import { PageSlideFade, StaggerChildren } from "components/page-transitions";
import Header from "components/header";
import { MotionBox } from "components/motion";
import axios from "axios";

const TURQUOISE = "#06b6d4";

const Posts = () => {
  const [mitem, mitemset] = React.useState([]);
  const [mprofile, mprofileset] = React.useState({
    ptitle: "",
    avatar: "",
    profileurl: "",
  });
  const mediumUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mehulkothari05";
  function getBlogPosts() {
    axios
      .get(mediumUrl)
      .then((response) => response.data)
      .then((data) => {
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0);
        const title = data.feed.title;
        mitemset(posts);
        mprofileset({
          ...mprofile,
          ptitle: title,
          profileurl: profileLink,
          avatar: avatar,
        });
      });
  }
  React.useEffect(() => {
    getBlogPosts();
  }, [mitem]);
  return (
    <PageSlideFade>
      <Header underlineColor={TURQUOISE} mt={0} mb={0}>
        Featured Articles
      </Header>
      <StaggerChildren>
        <Stack spacing={4} mt={12}>
          {mitem.map((post, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <PostCard item={post} profile={mprofile} />
            </MotionBox>
          ))}
        </Stack>
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default Posts;
