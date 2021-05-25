import { useState, useMemo, useCallback } from "react";
import { notification } from "antd";
import { shuffle } from "../utilities.js";
import data from "../elements.json";

function useRaffle() {
  const [selectedElements, setSelectedElements] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleChange = useCallback((value) => {
    setSelectedElements(value);
  }, []);
  const handleTodos = useCallback(() => {
    setProgress(0);
    setSelectedElements(data.elements.map((element) => element.name));
  }, []);

  const handleSalados = useCallback(() => {
    setProgress(0);
    const salados = shuffle(
      data.elements.map((element) => element.name)
    ).filter((element) => Math.floor(Math.random() * 2) === 1);
    setSelectedElements(salados);
  }, []);

  const handleClear = useCallback(() => {
    setSelectedElements([]);
    setProgress(0);
  }, []);

  const handleVamos = useCallback(() => {
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
  }, [selectedElements.length]);

  return useMemo(
    () => ({
      selectedElements,
      progress,
      handleChange,
      handleClear,
      handleSalados,
      handleTodos,
      handleVamos,
    }),
    [
      selectedElements,
      progress,
      handleChange,
      handleClear,
      handleSalados,
      handleTodos,
      handleVamos,
    ]
  );
}

export default useRaffle;
