import React from 'react';

import Home from '../../pages/index';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Cat } from 'app/components/Vote/Vote';

const cat1: Cat = {
  id: '1',
  url: 'http://google.fr',
  score: 1000,
  matchesWon: 0,
  matchesLost: 0,
};

const cat2: Cat = {
  id: '2',
  url: 'http://google.fr',
  score: 1000,
  matchesWon: 0,
  matchesLost: 0,
};

const testCats = [cat1, cat2];

const initialTestState = {
  vote: {
    contestants: [cat1, cat2],
  },
};

const testReducer = (state = initialTestState) => {
  return state;
};

it('renders homepage unchanged', () => {
  const store = createStore(testReducer);
  const tree = renderer
    .create(
      <Provider store={store}>
        <Home cats={testCats} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
