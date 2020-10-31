import seedCats from "data/seeds/cats";
import { GetStaticProps } from "next";
import Head from "next/head";
import * as Cat from "data/models/cat";
import getDatabase from "data/mongo";
import { Link, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    width: "100%",
  },
  mainTitle: {
    backgroundColor: theme.palette.secondary.main,
    borderBottom: `2px solid ${theme.palette.secondary.dark}`,
    marginBottom: "20px",
  },
  title: {
    textAlign: "center",
  },
  main: {
    padding: "5rem 0",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    height: "100px",
    borderTop: `1px solid ${theme.palette.secondary.dark}`,
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Home() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>CatMash 🐱</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Typography className={styles.mainTitle} variant="h1" color="primary">
          C A T M A S H 🐱
        </Typography>
        <Typography className={styles.title} variant="h2" color="primary">
          Are all of them cute? Yes. Is one of them cuter than the others?
          Probably!
        </Typography>
        <Typography className={styles.title} variant="h2" color="primary">
          Let's find out!
        </Typography>
      </header>

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <Link href="/results" variant="h2">
          See the results!
        </Link>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  await getDatabase();
  await seedCats();
  const model = Cat.getModel();
  const cats = await model.find(null, ["url", "id"]);

  return {
    props: { cats: cats.map(({ id, url }) => ({ id, url })) },
  };
};
