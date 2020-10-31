import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { useVote } from "app/hooks/vote.hooks";
import { useSelector } from "react-redux";
import { State } from "app/reducers";
import { VoteState } from "app/reducers/voteReducer";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "0",
    borderColor: theme.palette.secondary.main,
    borderWidth: "6px",
    borderStyle: "solid",
  },
  media: {
    height: 420,
    width: 420,
  },
}));

const VoteCard = ({ img, id }) => {
  const { isSubmittingVote, isFetchingNext } = useSelector<State, VoteState>(
    ({ vote }) => vote
  );
  const { voteFor } = useVote();
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea
        onClick={() => voteFor(id)}
        disabled={isSubmittingVote || isFetchingNext}
      >
        <CardContent className={classes.card}>
          <CardMedia className={classes.media} image={img} title="cat :3" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VoteCard;
