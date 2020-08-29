import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Hamburger from "./Main/Hamburger";
import Navbar from "./Main/Navbar";

const variants = {
  open: {
    width: "calc(100% - 250px)",
    borderTopLeftRadius: "40px",
    borderBottomLeftRadius: "40px",
  },
  closed: {
    width: "100%",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
  },
};

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 200,
};

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <Wrapper>
      <Container
        animate={isMenuOpen ? "open" : "closed"}
        variants={variants}
        transition={spring}
        initial={false}
      >
        <Topbar>
          <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Navbar />
        </Topbar>
        {children}
      </Container>
    </Wrapper>
  );
};

const Container = styled(motion.div)`
  float: right;
  min-height: 100vh;
  background: white;
  box-shadow: -49px 0px 154px rgba(27, 39, 50, 0.09);
  padding: 2rem;
  z-index: 4;
  overflow: auto;
`;

const Topbar = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background: ${({ theme }) => theme.background}; */
  z-index: 0;
`;

export default Layout;
