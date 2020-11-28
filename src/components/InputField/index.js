import React from "react";

/**
 * @description - text area input component
 * @param {object} props
 *
 * @returns {JSX}
 */

const InputField = ({ ...props }) => {
  const textArea = (
    <div className="relative">
      <textarea
        {...props}
        className="text-area"
        style={{ width: "401px", height: "149px" }}
      />
    </div>
  );

  return (
    <div className={props.className} data-testid="input-field">
      {textArea}
    </div>
  );
};

export default InputField;
