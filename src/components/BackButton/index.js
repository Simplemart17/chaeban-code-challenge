import React from "react";

/**
 * @description - back button component
 * @param {string} text
 * @param {function} onClick
 *
 * @returns {JSX}
 */
const Back = ({ text, onClick }) => {
  return (
    <button className="back-button" onClick={onClick}>
      <span className="margin-right">
        <svg
          className="fill-current"
          width="12"
          height="12"
          viewBox="0 0 20 20"
        >
          <path d="M6.334 8.5H19v3H6.334L11 16.12 9.097 18 1 10l8.097-8L11 3.88 6.334 8.5z"></path>
        </svg>
      </span>
      <p>{text}</p>
    </button>
  );
};

export default Back;
