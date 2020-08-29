import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const FeedItem = ({ data }) => {
  const { caption, comments, img, likes, location, profile, timestamp } = data;
  return (
    <Container>
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
      <GalleryItem url={img} />
      <InfoContainer>
        <Row>
          <p>
            <AiOutlineHeart color="#C4C4C4" /> {likes}
          </p>
          <p>
            <FaRegCommentAlt color="#C4C4C4" /> {comments}
          </p>
          <a>
            <RiSendPlaneLine color="#C4C4C4" />
          </a>
          <a>
            <BsThreeDotsVertical color="#C4C4C4" />
          </a>
        </Row>
        <Caption>
          <span>{profile.name}</span>
          {caption}
        </Caption>
      </InfoContainer>
    </Container>
  );
};

export default FeedItem;

const Container = styled.div`
  box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
    0 3px 3px -1px rgba(8, 11, 14, 0.1);
  padding: 1rem;
  border-radius: 1rem;
`;

const Header = styled.div``;

const InfoContainer = styled.div`
  padding: 1rem;
`;

const Caption = styled.p`
  font-size: 0.8rem;
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
    color: ${({ theme }) => theme.accent};
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    svg {
      margin-right: 5px;
    }
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem 0.5rem;

  .location {
    font-size: 0.5rem;
    color: ${({ theme }) => theme.accent};
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

const GalleryItem = styled.div`
  background: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  border-radius: 1rem;
  height: 16rem;
`;
