import React from "react";

import Home from "../../pages/index";
import renderer from "react-test-renderer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const cat1 = {
  id: "1",
  url: "http://google.fr",
};

const cat2 = {
  id: "2",
  url: "http://google.fr",
};

const testCats = [
  cat1,
  {
    id: "2",
    url: "http://google.fr",
  },
];

const initialTestState = {
  vote: {
    contestants: [cat1, cat2],
  },
};

const testReducer = (state = initialTestState, _action) => {
  return state;
};

it("renders homepage unchanged", () => {
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
