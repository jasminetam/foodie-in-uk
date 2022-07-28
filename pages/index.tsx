import type { NextPage } from 'next';
//components
import Layout from 'components/Layout';
import PostList from 'components/PostList';
import RecipeList from 'components/RecipeList';
//database
import db from 'utils/db';
import Post from 'models/Post';
import Recipe from 'models/Recipe';
//typescript
import { postProps, recipeProps } from 'lib/interface/interface';

//styles
import styled from 'styled-components';

interface Props {
  title: string;
  posts: postProps[];
  recipes: recipeProps[];
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Home: NextPage<Props> = ({ posts, recipes }) => {
  // console.log(234, posts);
  return (
    <Layout title="Home">
      <div>
        <h1 style={{ margin: '20px' }}>Recent Posts:</h1>
        <Grid>
          {posts?.length > 0 &&
            posts.map((post) => {
              return <PostList key={post.slug} post={post} />;
            })}
        </Grid>
        <h1 style={{ margin: '20px' }}>Recent Recipes:</h1>
        <Grid>
          {recipes?.length > 0 &&
            recipes.map((recipe) => {
              return <RecipeList key={recipe.slug} recipe={recipe} />;
            })}
        </Grid>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  await db.connect();
  const posts = await Post.find().lean();
  const recipes = await Recipe.find().lean();
  return {
    props: {
      posts: posts.map(db.convertDocToObj),
      recipes: recipes.map(db.convertDocToObj),
    },
  };
}

export default Home;
