import voteReducer from 'app/reducers/voteReducer';
import { combineReducers } from 'redux';

const combinedReducers = combineReducers({ vote: voteReducer });

export type State = ReturnType<typeof combinedReducers>;
export default combinedReducers;
