import React from "react";
import data from "./data";
const DummyList = () => {
  return (
    <>
      <h2>Dummy List</h2>
      <ul>
        {data?.map((item) => (
          <div key={"firstList" + item.title}>
            <li key={item.title}>{item.title}</li>
            <ul key={"secondList" + item.title}>
              {item.children.map((child) => (
                <li key={"item" + child.replace(/\s/g, "")}>{child}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </>
  );
};

export default DummyList;
