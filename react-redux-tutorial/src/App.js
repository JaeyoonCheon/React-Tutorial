import React from "react";
import Todos from "./components/Todos";
import CounterContainer from "./container/CounterContainer";

const App = () => {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr></hr>
      <Todos></Todos>
    </div>
  );
};

export default App;
