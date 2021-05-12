import { useState } from "react";

import { shuffle } from "./utilities.js";

import Buttons from "./components/Buttons";
import Selection from "./components/Selection";
import Winner from "./components/Winner";

import "./App.css";
import "antd/dist/antd.css";

import data from "./elements.json";
import { notification } from "antd";

function App() {
  const [selectedElements, setSelectedElements] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleChange = (value) => {
    setSelectedElements(value);
  };
  const handleTodos = () => {
    setSelectedElements(data.elements.map((element) => element.name));
  };
  const handleSalados = () => {
    const salados = shuffle(
      data.elements.map((element) => element.name)
    ).filter((element) => Math.floor(Math.random() * 2) === 1);
    setSelectedElements(salados);
  };
  const handleVamos = () => {
    if (selectedElements.length === 0) {
      notification["error"]({
        message: "Noope",
        description: "Debes seleccionar por lo menos dos elementos!",
      });
    } else if (selectedElements.length === 1) {
      notification["error"]({
        message: "Noope",
        description: "No puedes tener solo un salado!",
      });
    } else {
      setProgress(0.5);
      setTimeout(() => {
        setProgress(30);
        setTimeout(() => {
          setProgress(60);
          setTimeout(() => {
            setProgress(100);
          }, 2000);
        }, 2000);
      }, 1000);
    }
  };

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
