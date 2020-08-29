import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  open: { transform: "rotate(90deg) translateX(5px)" },
  closed: { transform: "rotate(0deg) translateX(0px)" },
};

const spring = {
  type: "spring",
  damping: 100,
  stiffness: 500,
};

const Hamburger = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <MenuBtn
      animate={isMenuOpen ? "open" : "closed"}
      variants={variants}
      transition={spring}
      initial={false}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span />
      <span />
    </MenuBtn>
  );
};

export default Hamburger;

const MenuBtn = styled(motion.a)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 13px;
  width: 30px;
  cursor: pointer;
  margin-right: 1rem;

  span {
    width: 25px;
    height: 4px;
    border-radius: 2rem;
    background: ${({ theme }) => theme.lightGray};
    transition: background 0.3s ease-in;
  }
  &:hover {
    span {
      background: ${({ theme }) => theme.lightPink};
    }
  }
`;
