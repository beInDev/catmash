import {
  Card,
  CardContent,
  CardMedia,
  Link,
  makeStyles,
} from "@material-ui/core";
import { Cat } from "app/components/Vote/Vote";
import * as CatModel from "data/models/cat";

interface Props {
  cats: Array<Cat>;
}

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "0",
    borderColor: theme.palette.secondary.main,
    borderWidth: "6px",
    borderStyle: "solid",
  },
  media: {
    height: 105,
    width: 105,
  },
}));

const Results = ({ cats }: Props) => {
  const styles = useStyles();
  return (
    <>
      {cats &&
        cats.map(({ url, id }) => (
          <Card key={id}>
            <Link href={`results/${id}`}>
              <CardContent className={styles.card}>
                <CardMedia
                  className={styles.media}
                  image={url}
                  title="cat :3"
                />
              </CardContent>
            </Link>
          </Card>
        ))}
    </>
  );
};

export async function getServerSideProps(_context) {
  const cats = await CatModel.getModel().find();

  return {
    props: {
      cats: cats.map(({ id, url, score, matches }) => ({
        id,
        url,
        score,
        matches,
      })),
    },
  };
}

export default Results;
