import { Cat } from 'app/components/Vote/Vote';
import { Reducer } from 'react';

export enum VoteActionTypes {
  GET_NEXT = 'GET_NEXT',
  VOTE = 'VOTE',
  GET_NEXT_RESPONSE = 'GET_NEXT_RESPONSE',
  VOTE_RESPONSE = 'VOTE_RESPONSE',
}

export interface VoteState {
  contestants: Array<Cat>;
  isFetchingNext: boolean;
  isSubmittingVote: boolean;
  error: Error;
}

export interface VoteActionPayload {
  error?: Error;
  contestants?: Array<Cat>;
}

export interface VoteAction {
  type: VoteActionTypes;
  payload?: VoteActionPayload;
}

const initialState: VoteState = {
  contestants: [],
  isFetchingNext: false,
  isSubmittingVote: false,
  error: null,
};

const voteReducer: Reducer<VoteState, VoteAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case VoteActionTypes.GET_NEXT:
      return {
        ...state,
        isFetchingNext: true,
      };
    case VoteActionTypes.GET_NEXT_RESPONSE:
      return {
        ...state,
        isFetchingNext: false,
        contestants: action.payload.contestants,
        error: action.payload.error,
      };
    case VoteActionTypes.VOTE: {
      return {
        ...state,
        isSubmittingVote: true,
      };
    }
    case VoteActionTypes.VOTE_RESPONSE:
      return {
        ...state,
        isSubmittingVote: false,
        error: action.payload?.error,
      };
    default:
      return state;
  }
};

export default voteReducer;
