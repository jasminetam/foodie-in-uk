import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { postProps } from '../lib/interface/interface';

interface Props {
  post: postProps;
}

const Wrapper = styled.div`
  margin-top: 32px;
  padding-left: 30px;
  padding-right: 30px;
`;

const StyledImg = styled.img`
  width: 480px;
  height: 360px;
  object-fit: contain;
`;

const PostList: React.FC<Props> = ({ post }) => {
  return (
    <Wrapper>
      <Link href={`/post/${post.slug}`} passHref>
        <StyledImg src={post.image} alt={post.brand} />
      </Link>
      <h2>{post.brand}</h2>
      <h3>{post.location}</h3>
    </Wrapper>
  );
};

export default PostList;
