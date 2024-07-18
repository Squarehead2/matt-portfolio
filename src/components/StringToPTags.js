import React from "react";
import "./StringToPTags.css";
function stringToPTags(inputString) {
  let resultHtml = "";
  let inputStringArray = inputString.inputString.split("");

  return (
    <div
      className="flex flex-col space-y-[-0.3rem] text-center hover:text-accent hover:duration-500  hover:ease-in-out hover:cursor-pointer w-4"
      onClick={() => {
        window.open(inputString.inputString);
      }}
    >
      {inputStringArray.map((char, index) => {
        // Calculate a delay for each character, e.g., 0.1s, 0.2s, 0.3s, etc.
        const animationDelay = `${Math.random()}s`;

        if (char === " ") {
          return (
            <p
              className="text-xxxs animatecss-jello animatecss-infinite animatecss-slow"
              style={{ animationDelay }}
            >
              {"\u00A0"}
            </p>
          );
        } else {
          return (
            <p
              className=" animatecss-heartBeat animatecss-infinite animatecss-fast"
              style={{ animationDelay }}
            >
              {char}
            </p>
          );
        }
      })}
    </div>
  );
}

// Example usage:

export default stringToPTags;
