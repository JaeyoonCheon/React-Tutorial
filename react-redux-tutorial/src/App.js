import React from "react";
import TodosContainer from "./container/TodosContainer";
import CounterContainer from "./container/CounterContainer";

const App = () => {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr></hr>
      <TodosContainer></TodosContainer>
    </div>
  );
};

export default App;
