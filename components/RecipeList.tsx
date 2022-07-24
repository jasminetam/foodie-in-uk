import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { recipeProps } from '../lib/interface/interface';

interface Props {
  recipe: recipeProps;
}

const Wrapper = styled.div`
  margin-top: 32px;
`;

const StyledImg = styled.img`
  width: 480px;
  height: 360px;
  object-fit: contain;
`;

const RecipeList: React.FC<Props> = ({ recipe }) => {
  return (
    <Wrapper>
      {/* <Link href={`/post/${recipe.slug}`} passHref> */}
      <StyledImg src={recipe.image} alt={recipe.recipeName} />
      {/* </Link> */}
      <h2>{recipe.recipeName}</h2>
      <h3>{recipe.cookingStyle}</h3>
    </Wrapper>
  );
};

export default RecipeList;
