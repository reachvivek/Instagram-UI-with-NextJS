import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import SideHeader from "./SideHeader";
import { Gear, IgLogo } from "../Svg/Svg";
import ProfileStats from "./ProfileStats";

const Sidebar = () => {
  return (
    <Container>
      <Logo>
        <IgLogo />
      </Logo>
      <SideHeader />
      <ProfileStats />
      <Navigation />
      <Settings>
        <Gear className="settings" />
      </Settings>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  /* z-index: -2; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.div`
  position: absolute;
  top: 1rem;
  left: 2rem;
  cursor: pointer;
`;

const Settings = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 2rem;
  cursor: pointer;
`;
