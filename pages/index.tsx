import { makeStyles } from "@material-ui/core";
import Vote from "app/components/Vote/Vote";
import getDatabase from "data/mongo";
import seedCats from "data/seeds/cats";
import { GetStaticProps } from "next";
import * as Cat from "data/models/cat";

const useStyles = makeStyles(() => ({
  main: {
    padding: "5rem 0",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Home = ({ cats }) => {
  const styles = useStyles();
  return (
    <main className={styles.main}>
      <Vote cats={cats} />
    </main>
  );
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
