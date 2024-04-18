import React, { useEffect, useState } from "react";
import { Sortings, Array } from "../Data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [arr, setArr] = useState([]);
  const [n, setN] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleArrayChange = (e) => {
    if (isEditing) {
      const inputArray = e.target.value.split(" ");
      const newArray = inputArray.filter(
        (item) => /^[0-9]+$/.test(item) && !isNaN(item) && item < 200
      );
      setArr(newArray);
    } else {
      console.log("Editing is disabled");
    }
  };

  const handleNChange = (e) => {
    setN(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      const newArray = [
        ...arr.map((elem) => ({ value: elem, color: "#000000" })),
      ];
      setArr(newArray);
      Array.elements = newArray;
    }
    setIsEditing(!isEditing);
  };
  

  useEffect(() => {
    console.log("Array elem",Array.elements);
  }, [isEditing]);

  return (
    <div className="flex w-full">
      <div className="p-1 w-full">
        <h1>Define Array</h1>
        <form onSubmit={handleSubmit} className="flex flex-col p-2">
          <label htmlFor="number">Enter Size</label>
          <input
            type="number"
            name="number"
            id="number"
            className={`border m-1 p-0.5 ${
              isEditing ? "text-black" : "text-red-400"
            }`}
            required
            onChange={handleNChange}
            disabled={!isEditing}
            value={n}
            placeholder="Enter Size"
          />
          <label htmlFor="message">
            Enter array elements separated by space:
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            required
            className={`border m-2 p-1 min-w-[300px] ${
              isEditing ? "text-black" : "text-red-400"
            }`}
            onChange={handleArrayChange}
            disabled={!isEditing}
          ></textarea>
          <button type="submit">Set Array</button>
          {console.log(Array.elements)}
        </form>
        <div>
          {!isEditing && (
            <h1>
              {arr.map((item, index) => (
                <span key={index}>{item.value} </span>
              ))}
            </h1>
          )}
        </div>
        <div className="flex justify-evenly">
          {!isEditing &&
            Sortings.map((item, index) => (
              <Link
                to={{
                  pathname: "/sorting/graph",
                }}
                key={index}
              >
                {item}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
