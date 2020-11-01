import Vote from "app/components/Vote/Vote";
import getDatabase from "data/mongo";
import seedCats from "data/seeds/cats";
import { GetStaticProps } from "next";
import * as Cat from "data/models/cat";

const Home = ({ cats }) => {
  return <Vote cats={cats} />;
};

export const getStaticProps: GetStaticProps = async () => {
  await getDatabase();
  await seedCats();
  const model = Cat.getModel();
  const cats = await model.find(null, ["url", "id"]);
  return {
    props: {
      cats: cats.map(({ id, url }) => ({ id, url })),
    },
  };
};

export default Home;
