import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 280px;
  font-size: 63px;
  background-image: url('image/banner.jpg');
  background-size: contain;
  background-attachment: fixed;
  text-align: center;
`;

const FadeDiv = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(231, 229, 229, 0.41),
    #f9f8f8f8
  );
`;

function Header() {
  return (
    <>
      <Wrapper>
        <h1>Foodie in UK</h1>
        <FadeDiv />
      </Wrapper>
    </>
  );
}

export default Header;
