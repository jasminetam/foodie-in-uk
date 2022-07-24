import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 40px;
  background-color: #363636;;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  padding: 30px;
  height: 100%;
  position: sticky;
  top: 80px;
`;

const Sidebar = () => {
  return (
    <>
      <Wrapper>
        <h2>Foodie Post</h2>
        <ul>
          <li>Create</li>
          <li>Edit</li>
          <li>Delete</li>
        </ul>
        <h2>Recipe</h2>
        <ul>
          <li>Create</li>
          <li>Edit</li>
          <li>Delete</li>
        </ul>
      </Wrapper>
    </>
  );
};

export default Sidebar;
