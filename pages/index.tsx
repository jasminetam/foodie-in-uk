import Layout from 'components/Layout';
import PostList from 'components/PostList';
import RecipeList from 'components/RecipeList';
import type { NextPage } from 'next';
import data from '../components/data';
import { postProps } from '../lib/interface/interface';
import styled from 'styled-components';

interface Props {
  title: string;
  post: postProps;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Home: NextPage<Props> = () => {
  return (
    <Layout title="Home">
      <div>
        <h1 style={{ margin: '20px' }}>Recent Posts:</h1>
        <Grid>
          {data.posts.map((post) => {
            return <PostList key={post.slug} post={post} />;
          })}
        </Grid>
        <h1 style={{ margin: '20px' }}>Recent Recipes:</h1>
        <Grid>
          {data.recipes.map((recipe) => {
            return <RecipeList key={recipe.slug} recipe={recipe} />;
          })}
        </Grid>
      </div>
    </Layout>
  );
};

export default Home;
