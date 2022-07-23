import Layout from 'components/Layout';
import type { NextPage } from 'next';

interface Props {
  title: string
}

const Home: NextPage<Props> = () => {
  return (
    <Layout title="Home">
      <h1></h1>
    </Layout>
  );
};

export default Home;
