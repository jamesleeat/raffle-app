import { useState } from "react";

import Buttons from "./components/Buttons";
import Selection from "./components/Selection";
import Winner from "./components/Winner";

import "./App.css";
import "antd/dist/antd.css";
import useRaffle from "./hooks/raffle";

function App() {
  const {
    selectedElements,
    handleChange,
    handleClear,
    handleVamos,
    handleTodos,
    handleSalados,
    progress,
  } = useRaffle();
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>La rifa elemental!</h1>
        </header>
        <div className="body">
          <Selection
            selectedElements={selectedElements}
            handleChange={handleChange}
            handleClear={handleClear}
          />
          <Buttons
            progress={progress}
            handleVamos={handleVamos}
            handleTodos={handleTodos}
            handleSalados={handleSalados}
          />
          <Winner progress={progress} selectedElements={selectedElements} />
        </div>
      </div>
    </div>
  );
}

export default App;
