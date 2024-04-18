import React from "react";
import { Array } from "../Data";
import Graph from "./Graph";

const Bar = () => {

  return (
    <div>
      <div className="m-2">
        <div className="flex justify-center">
          <div className="flex gap-1 border ">
            {Array.elements.map((element, index) => (
              <h1 key={index} className="border p-1">
                <span>{element.value}</span>
              </h1>
            ))}
          </div>
        </div>
        <div
          style={{ width: "90%", overflowX: "auto", marginLeft: "5%" }}
          className=" border p-1 flex justify-evenly"
        >
          <div className="flex ">
            {Array.elements.map((element, index) => (
              <div key={index}>
                <Graph length={element.value} color={element.color} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
