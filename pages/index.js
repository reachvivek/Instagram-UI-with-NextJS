import React from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import Stories from "../components/Main/Stories/Stories";
import Feed from "../components/Main/Feed/Feed";

export default ({ stories, feed }) => {
  return (
    <Container>
      <Stories stories={stories} />
      <Feed feed={feed} />
    </Container>
  );
};

export async function getServerSideProps({req}) {
  const storiesRes = await fetch(`${process.env.HOST_URL}api/stories`);
  const feedRes = await fetch(`${process.env.HOST_URL}api/feed`);

  const feed = await feedRes.json();
  const stories = await storiesRes.json();

  return {
    props: {
      stories: stories.data,
      feed: feed.data,
    },
  };
}

const Container = styled.div`
  position: relative;
`;
