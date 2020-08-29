import React from "react";
import styled from "styled-components";

const Story = ({ story }) => {
  return (
    <Container url={story.url}>
      <div className="embla__slide__inner">
        {/* <img className="embla__slide__img" src={story.url} alt="A cool cat." /> */}
        <Img url={story.url}>
          <Wrapper>
            <h3>@{story.profile}</h3>
          </Wrapper>
        </Img>
      </div>
    </Container>
  );
};

export default Story;

const Wrapper = styled.div`
  opacity: 0;
  height: 90%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  border-radius: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.4);
  }

  h3 {
    color: ${({ theme }) => theme.gray};
  }
`;

const Container = styled.div`
  position: relative;
  min-width: 150px;
  padding-left: 10px;
  border-radius: 1rem;
  cursor: pointer;

  .embla__slide__inner {
    position: relative;
    overflow: hidden;
    height: 230px;
  }

  .embla__slide__img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: none;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
  }
`;

const Img = styled.div`
  background: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  min-width: 100%;
  min-height: 90%;
  border-radius: 8px;
  box-shadow: 0px 22px 15px -27px rgba(0, 0, 0, 0.83);
`;
