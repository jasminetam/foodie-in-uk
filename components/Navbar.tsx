import React from 'react';
import { Wrapper, Flex, NavContainer, NavIcons } from '../styled/navbar';
import Link from 'next/link';


const Navbar = () => {
  return (
    <Wrapper>
      <NavContainer>
        <Flex>
          <Link href="/" passHref>
            <NavIcons style={{ marginLeft: '10px' }}>Home</NavIcons>
          </Link>
          <NavIcons>Foodie</NavIcons>
          <NavIcons>Recipe</NavIcons>
        </Flex>
        <Flex>
          <NavIcons>FavList</NavIcons>
          <Link href="/login">
            <NavIcons>Login</NavIcons>
            </Link>
        </Flex>
      </NavContainer>
    </Wrapper>
  );
};

export default Navbar;
