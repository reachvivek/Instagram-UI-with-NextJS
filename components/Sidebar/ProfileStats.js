import React from "react";
import styled from "styled-components";

const ProfileStats = () => {
  return (
    <>
      <Hr />
      <Container>
        <Column>
          <h3>138</h3>
          <h4>POSTS</h4>
        </Column>
        <Column>
          <h3>2.3k</h3>
          <h4>FOLLOWERS</h4>
        </Column>
        <Column>
          <h3>230</h3>
          <h4>FOLLOWING</h4>
        </Column>
      </Container>
      <Hr />
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2.5rem;
`;

const Hr = styled.hr`
  border: 0.5px solid rgba(221, 221, 221, 0.3);
  width: 180px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 3px;
  }
  h4 {
    font-weight: 200;
    font-size: 7px;
    color: ${({ theme }) => theme.accent};
  }
`;

export default ProfileStats;
