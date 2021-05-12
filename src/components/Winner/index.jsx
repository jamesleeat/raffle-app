import React from "react";
import { Progress } from "antd";
import "./winner.css";

const Winner = ({ progress, selectedElements }) => {
  const selectWinner = () => {
    return selectedElements[
      Math.floor(Math.random() * selectedElements.length)
    ];
  };
  return (
    <div className="winner">
      {progress === 100 ? (
        <div>
          <h1>El salado mayor es {selectWinner()}</h1>
        </div>
      ) : (
        <Progress
          type="circle"
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
          percent={Math.floor(progress)}
        />
      )}
    </div>
  );
};

export default Winner;
