import React from 'react';
import { Wrapper, Flex } from '../styled/navbar';
import styled from "styled-components"

const FlexNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navbar = () => {
  return (
    <Wrapper>
      <FlexNav>
        <Flex>
          <h3 style={{padding: '10px', marginLeft: "10px"}}>Home</h3>
          <h3 style={{padding: '10px'}}>Foodie</h3>
          <h3 style={{padding: '10px'}}>Recipe</h3>
        </Flex>
        <Flex>
          <div style={{padding: '10px'}}>FavList</div>
          <button style={{padding: '10px'}}>Login</button>
        </Flex>
      </FlexNav>
    </Wrapper>
  );
};

export default Navbar;
