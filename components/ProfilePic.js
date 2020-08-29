import React from "react";
import styled from "styled-components";

const ProfilePic = ({ size }) => {
  return (
    <Container size={size ? size : "35px"}>
      <img src="/profile_pic.jpg" alt="" />
    </Container>
  );
};

export default ProfilePic;

const Container = styled.div`
  height: ${({ size }) => size};
  background: linear-gradient(211.13deg, #ff766d 7.72%, #f1d571 92.1%);
  border-radius: 30rem;
  padding: 1px;

  img {
    height: 100%;
    border-radius: 30rem;
    border: 1px solid #ffffff;
  }
`;
