import React from "react";
import { Normalize } from "styled-normalize";
import TestOther from './components/testOther';
import TestNinePlaces from './components/testNinePlaces';

const App = () => {
  return (
    <React.Fragment>
      <Normalize />
      <TestNinePlaces />
      <TestOther />
    </React.Fragment>
  );
};
export default App;
