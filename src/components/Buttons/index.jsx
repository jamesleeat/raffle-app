import React from "react";
import { Button } from "antd";
import "./buttons.css";

const Buttons = ({ handleTodos, handleSalados, handleVamos, progress }) => {
  return (
    <div className="buttons">
      <Button
        type="dashed"
        style={{ width: "120px" }}
        onClick={handleTodos}
        disabled={progress > 0 && progress < 100}
      >
        Todos!
      </Button>
      <Button
        danger
        type="primary"
        style={{ width: "120px" }}
        disabled={progress > 0 && progress < 100}
        onClick={handleSalados}
      >
        Salados!
      </Button>
      <Button
        type="primary"
        style={{ width: "120px" }}
        onClick={handleVamos}
        disabled={progress > 0 && progress < 100}
      >
        Vamos!
      </Button>
    </div>
  );
};

export default Buttons;
