import React from "react";
import { Select } from "antd";

import data from "../../elements.json";
const { Option } = Select;

const Selection = ({ selectedElements, handleChange, handleClear }) => {
  return (
    <Select
      mode="multiple"
      allowClear
      value={selectedElements}
      style={{ width: "400px" }}
      placeholder="Selecciona a los afortunados"
      defaultValue={[]}
      onChange={handleChange}
      onClear={handleClear}
    >
      {data.elements.map((element, index) => {
        return (
          <Option key={element.name} value={element.name}>
            {element.name}
          </Option>
        );
      })}
    </Select>
  );
};

export default Selection;
