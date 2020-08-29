import React from "react";
import ProfilePic from "../ProfilePic";
import styled from "styled-components";

const SideHeader = () => {
  return (
    <Container>
      <ProfilePic size="120px" />
      <h1>Vivek Kumar Singh</h1>
      <h3>Chennai, IN</h3>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 0.7rem;
    font-weight: 300;
    margin-top: 0;
    color: ${({ theme }) => theme.accent};
  }
`;

export default SideHeader;
