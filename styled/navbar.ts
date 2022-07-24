import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: #f9f8f8;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
`;

export const NavIcons = styled.h3`
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: salmon;
   
  }
`;
