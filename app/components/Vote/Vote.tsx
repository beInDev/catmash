import { Grid } from '@material-ui/core';
import { useVote } from 'app/hooks/vote.hooks';
import { State } from 'app/reducers';
import { VoteState } from 'app/reducers/voteReducer';
import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Error from '../Error';
import Spinner from '../Spinner';
import VoteCard from './VoteCard';

export interface Cat {
  url: string;
  id: string;
  score: number;
  matchesWon: number;
  matchesLost: number;
}

interface Props {
  cats: Cat[];
}

function getContestantCat(cats: Cat[], contestant: Cat) {
  const cat = cats.find(({ id }) => id === contestant.id);
  return cat;
}

/**
 * Main vote component. It fetches and displays each contestants pairs.
 *
 * @export
 * @param {Props} { cats }
 * @returns
 */
export default function Vote({ cats }: Props): JSX.Element {
  const { contestants, isSubmittingVote, isFetchingNext, error } = useSelector<
    State,
    VoteState
  >(({ vote }) => vote);
  const { getNextContestants: getNext } = useVote();

  useEffect(() => {
    if (
      !contestants?.length &&
      !isFetchingNext &&
      !isSubmittingVote &&
      !error
    ) {
      getNext();
    }
  }, [getNext]);

  if (!contestants?.length) {
    return <Spinner text={'Fetching...'} />;
  }

  const catA = getContestantCat(cats, contestants[0]);
  const catB = getContestantCat(cats, contestants[1]);

  return (
    <Fragment>
      {error && <Error error={error} />}
      <Grid container direction={'row'} spacing={2} justify={'center'}>
        <Grid item>
          <VoteCard img={catA.url} id={catA.id} />
        </Grid>
        <Grid item>
          <VoteCard img={catB.url} id={catB.id} />
        </Grid>
      </Grid>
    </Fragment>
  );
}
