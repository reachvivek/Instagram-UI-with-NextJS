import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FeedItem from "./FeedItem";
import GalleryItem from "./Galleryitem";

const Feed = ({ feed }) => {
  return (
    <Container>
      <h1>FEED</h1>
      <Gallery>
        {feed && feed.map((item) => <GalleryItem key={item.img} data={item} />)}
      </Gallery>
    </Container>
  );
};

export default Feed;

const Container = styled.div`
  h1 {
    color: ${({ theme }) => theme.lightGray};
    font-weight: 900;
    letter-spacing: -0.03em;
  }
`;

const ItemInfo = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 7px;
  background: rgba(0, 0, 0, 0);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;

// const GalleryItem = styled.div`
//   background: url("https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fwill-truettner-g5qWYuTKkok-unsplash.jpg?alt=media&token=af5fc645-df71-4cc7-893e-7c52fe709477");
//   background-position: center;
//   background-size: cover;
//   border-radius: 7px;
// `;

const Gallery = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  /* grid-auto-rows: 1fr; */
  grid-auto-rows: minmax(20rem, auto);
  column-gap: 3rem;
  row-gap: 3rem;
  &:before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;
