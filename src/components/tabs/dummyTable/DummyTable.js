import React from "react";
import data from "./data";

import "./dummyTable.scss";

const DummyTable = () => {
  const getTableHeaderContent = () => {
    if (data) {
      let keys = Object.keys(data[0]);
      return keys.map((key) =>
        key ? key[0].toUpperCase() + key.slice(1) : key
      );
    }
  };

  return (
    <>
      <h2>Dummy Table</h2>
      <table className="table-fill">
        <thead>
          <tr>
            {getTableHeaderContent()?.map((key) => (
              <th key={key} >{key}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-hover">
          {data?.map((d) => (
            <tr key={d.name}>
              {Object.values(d).map((value) => (
                <td key={value} >{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DummyTable;
