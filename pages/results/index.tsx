import { Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import CatItem from 'app/components/Results/CatItem';
import { Cat } from 'app/components/Vote/Vote';
import * as CatModel from 'data/models/cat';
import { useState } from 'react';

interface Props {
  cats: Array<Cat>;
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  grid: {
    width: '100%',
  },
}));

function getPaginatedCats(cats: Array<Cat>, page: number) {
  const pageSize = 10;
  const offset = (page - 1) * pageSize;
  const items = [];
  for (let index = 0; index < pageSize; index++) {
    const catIndex = index + offset;
    items.push(<CatItem cat={cats[catIndex]} rank={catIndex + 1} />);
  }

  return items;
}

const Results = ({ cats }: Props) => {
  const [page, setPage] = useState(1);
  const styles = useStyles();
  return (
    <>
      <Grid container direction="column">
        <Grid item className={styles.grid}>
          <Grid
            container
            direction={'column'}
            className={styles.grid}
            justify="center"
          >
            {getPaginatedCats(cats, page)}
          </Grid>
        </Grid>
        <Grid item className={styles.grid}>
          <Grid container justify="center">
            <Grid item xs={9} md={6} lg={6} xl={3}>
              <Pagination
                count={10}
                color="secondary"
                onChange={(_, newPage) => setPage(newPage)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export async function getServerSideProps(_context) {
  const cats: Cat[] = await CatModel.getModel().find().sort({ score: -1 });

  return {
    props: {
      cats: cats.map(({ id, url, score, matchesWon, matchesLost }) => ({
        id,
        url,
        score,
        matchesWon,
        matchesLost,
      })),
    },
  };
}

export default Results;
