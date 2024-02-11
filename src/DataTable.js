// DataTable.js

import React, { useState } from "react";
import { Table, Input } from "reactstrap";

const DataTable = ({ columns, headerColor, rowColor, alternateRowColor, hoverRowColor }) => {
  const [inputData, setInputData] = useState([]);
  const [currentRow, setCurrentRow] = useState({});

  const handleInput = (e, key) => {
    const { value } = e.target;
    setCurrentRow({ ...currentRow, [key]: value });
  };

  const saveData = () => {
    if (Object.keys(currentRow).length !== 0) {
      setInputData([...inputData, currentRow]);
      setCurrentRow({});
    }
  };

  return (
    <Table striped bordered hover>
      <thead style={{ backgroundColor: headerColor }}>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {columns.map((column, index) => (
            <td key={column.key}>
              <Input
                type="text"
                value={currentRow[column.key] || ""}
                onChange={(e) => handleInput(e, column.key)}
                onBlur={saveData}
              />
            </td>
          ))}
        </tr>
        {inputData.map((row, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 === 0 ? rowColor : alternateRowColor }}>
            {columns.map((column) => (
              <td key={column.key}>
                {row[column.key] || ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
