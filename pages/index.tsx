import Vote, { Cat } from 'app/components/Vote/Vote';
import getDatabase from 'data/mongo';
import seedCats from 'data/seeds/cats';
import { GetStaticProps } from 'next';
import * as CatData from 'data/models/cat';

interface Props {
  cats: Cat[];
}

const Home = ({ cats }: Props): JSX.Element => {
  return <Vote cats={cats} />;
};

// Since we have a fixed cat list, build the page with cats list only once.
export const getStaticProps: GetStaticProps = async () => {
  await getDatabase();
  await seedCats();
  const model = CatData.getModel();
  const cats = await model.find(null, ['url', 'id']);
  return {
    props: {
      cats: cats.map(({ id, url }) => ({ id, url })),
    },
  };
};

export default Home;
