import React from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import ProfilePic from "../ProfilePic";

const Navbar = () => {
  return (
    <Container>
      <SearchBar type="text" placeholder="Search" />
      <Wrapper>
        <AddBtn whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <FiPlus color="#FFF" />
        </AddBtn>
        <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.1662 0.969593C23.0214 0.849372 22.8454 0.772778 22.6588 0.748736C22.4721 0.724695 22.2825 0.754196 22.1119 0.833802L1.64734 10.4395V12.2982L10.2429 15.7363L15.7564 24.2188H17.6155L23.4895 1.98243C23.5371 1.80033 23.532 1.60844 23.4748 1.42912C23.4176 1.24981 23.3105 1.09044 23.1662 0.969593V0.969593ZM16.4677 22.446L11.7285 15.1548L19.0212 7.1674L17.8673 6.11388L10.5176 14.1635L3.43054 11.3287L21.6651 2.76954L16.4677 22.446Z"
              fill="#C4C4C4"
            />
          </svg>
        </Button>
        <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <AiOutlineHeart size={23} color="#C4C4C4" />
        </Button>
        <Button>
          <ProfilePic size="40px" />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 2;
`;

const Wrapper = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

const Button = styled(motion.a)`
  cursor: pointer;
  margin: 0 1.5rem;
`;

const AddBtn = styled(motion.a)`
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  margin: 0 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 0px 27px -18px rgba(234, 76, 137, 0.53);
  cursor: pointer;
`;

const SearchBar = styled.input`
  width: 15rem;
  margin-left: 2rem;
  height: 1.7rem;
  border-radius: 1rem;
  padding: 0 1rem;
  border-width: 0px;
  border: none;
  background: ${({ theme }) => theme.lightGray};
`;
