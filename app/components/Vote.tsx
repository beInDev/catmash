import { Grid } from "@material-ui/core";
import { useVote } from "app/hooks/vote.hooks";
import { State } from "app/reducers";
import { VoteState } from "app/reducers/voteReducer";
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import Error from "./Error";
import Spinner from "./Spinner";
import VoteCard from "./VoteCard";

export interface Cat {
  url: string;
  id: string;
}

interface Props {
  cats: Array<Cat>;
}

function getContestantCat(cats: Array<Cat>, contestant: Cat) {
  const cat = cats.find(({ id }) => id === contestant.id);
  return cat;
}

export default function Vote({ cats }: Props) {
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
    return () => {};
  }, [getNext]);

  if (!contestants?.length) {
    return <Spinner text={"Fetching..."} />;
  }

  const catA = getContestantCat(cats, contestants[0]);
  const catB = getContestantCat(cats, contestants[1]);

  return (
    <Fragment>
      {error && <Error error={error} />}
      <Grid container direction={"row"} spacing={8}>
        <Grid item xs={6}>
          <VoteCard img={catA.url} id={catA.id} />
        </Grid>
        <Grid item xs={6}>
          <VoteCard img={catB.url} id={catB.id} />
        </Grid>
      </Grid>
    </Fragment>
  );
}
