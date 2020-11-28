import React from "react";

/**
 * @description Button component
 *
 * @param {Object} props
 *
 * @returns {JSX}
 */
const Button = (props) => {
  const { disabled, name, onClick } = props;

  const buttonContent = () => {
    return <span>{name}</span>;
  };
  return (
    <button
      data-testid="button"
      disabled={disabled}
      onClick={onClick}
      className={`button ${disabled && "disabled"}`}
    >
      {buttonContent(props)}
    </button>
  );
};

export default Button;
