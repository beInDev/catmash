import { State } from 'app/reducers';
import {
  VoteAction,
  VoteActionPayload,
  VoteActionTypes,
  VoteState,
} from 'app/reducers/voteReducer';
import axios from 'axios';
import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const VOTE_PATH_URL = '/api/vote';
const NEXT_PATH_URL = '/api/vote/next';

const voteAction = (dispatch: Dispatch<VoteAction>) => (
  type: VoteActionTypes,
  payload?: VoteActionPayload
) => {
  dispatch({
    type,
    payload,
  });
};

export function useVote() {
  const { isFetchingNext, isSubmittingVote, contestants } = useSelector<
    State,
    VoteState
  >(({ vote }) => vote);
  const dispatch = useDispatch();
  const action = voteAction(dispatch);

  // Retrieves the next cat pair for vote
  const getNextContestants = async () => {
    if (isFetchingNext || isSubmittingVote) {
      return;
    }

    action(VoteActionTypes.GET_NEXT);

    try {
      const { data: contestants } = await axios.get(`${NEXT_PATH_URL}`);
      action(VoteActionTypes.GET_NEXT_RESPONSE, { contestants });
    } catch (error) {
      action(VoteActionTypes.GET_NEXT_RESPONSE, { error });
    }
  };

  // Elects a winner
  const voteFor = async (winnerId: string) => {
    if (isFetchingNext || isSubmittingVote) {
      return;
    }

    const loserId = contestants.find(({ id }) => id !== winnerId).id;
    action(VoteActionTypes.VOTE);

    try {
      await axios.post(`${VOTE_PATH_URL}`, {
        winnerId,
        loserId,
      });
      action(VoteActionTypes.VOTE_RESPONSE);
      getNextContestants();
    } catch (error) {
      action(VoteActionTypes.VOTE_RESPONSE, { error });
    }
  };

  return { getNextContestants, voteFor };
}
