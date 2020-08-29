import React, { useState } from "react";
import styled from "styled-components";
import Story from "./Story";
import { useEmblaCarousel } from "embla-carousel/react";

const Stories = ({ stories }) => {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <Container>
      <h1>STORIES</h1>
      <EmblaCarouselReact className="embla__viewport">
        <Wrapper>
          {stories &&
            stories.map((story) => <Story key={story.url} story={story} />)}
        </Wrapper>
      </EmblaCarouselReact>
    </Container>
  );
};

export default Stories;

const Container = styled.div`
  position: relative;
  /* background-color: #f7f7f7; */
  padding: 20px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }
  /* max-width: 100%;
  position: relative;
  background-color: #f7f7f7;
  padding: 20px;
  .scrollContainer {
    height: 100px;
  } */
  h1 {
    color: ${({ theme }) => theme.lightGray};
    font-weight: 900;
    letter-spacing: -0.03em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: -10px;
`;
