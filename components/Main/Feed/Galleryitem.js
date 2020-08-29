import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const GalleryItem = ({ data }) => {
  const { caption, comments, img, likes, location, profile, timestamp } = data;

  return (
    <Container url={img}>
      <Wrapper>
        <Header>
          <TitleRow>
            <div className="header-section">
              <img src={profile.image} alt="" />
              <Column>
                <h3>{profile.name}</h3>
                <p>{timestamp}</p>
              </Column>
            </div>
            <p className="location">{location}</p>
          </TitleRow>
        </Header>
        <InfoContainer>
          <Row>
            <p>
              <AiOutlineHeart color="#EA4C89" /> {likes}
            </p>
            <p>
              <FaRegCommentAlt color="#FF766D" /> {comments}
            </p>
            <a>
              <RiSendPlaneLine color="#8134AF" />
            </a>
            <a>
              <BsThreeDotsVertical color="#1B273273" />
            </a>
          </Row>
          <Caption>
            {/* <span>{profile.name}</span> */}
            {caption}
          </Caption>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

const Header = styled.div``;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: #1b2732b3;

    svg {
      margin-right: 5px;
    }
  }
`;

const InfoContainer = styled.div`
  padding: 1rem;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Caption = styled.p`
  font-size: 0.8rem;
  color: #1b2732b3;
  span {
    font-weight: bold;
    margin-right: 0.3rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin: 0;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
    font-weight: 300;
  }
  p {
    margin: 0;
    font-size: 0.6rem;
    color: ${({ theme }) => theme.gray};
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem 0.5rem;

  .location {
    font-size: 0.5rem;
    color: ${({ theme }) => theme.gray};
  }

  .header-section {
    display: flex;
  }
  img {
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 2rem;
    margin-right: 0.4rem;
  }
`;

const Wrapper = styled.div`
  opacity: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  border-radius: inherit;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.4);
  }

  h1 {
    color: ${({ theme }) => theme.gray};
  }
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  box-shadow: 0px 53px 29px -57px rgba(0, 0, 0, 0.83);
  /* &::before {
    content: "";
    width: 500px;
    height: 500px;
    background: green;
  } */
`;
export default GalleryItem;
