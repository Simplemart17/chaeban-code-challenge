import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import paleteIcon from "../../assets/icons/color-circle.svg";
import DatePicker from "../../components/DatePicker";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const InputPage = () => {
  const history = useHistory();
  const [field, setField] = useState({
    date: "",
    info: "",
    theme: "",
  });

  /**
   * @description - function to handle input change
   * @param {object} event
   *
   * @returns {void}
   */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setField({ ...field, [name]: value });
  };

  /**
   * @description - function to save the state to preview the result page
   *
   * @returns {void}
   */
  const handleSubmit = () => {
    localStorage.setItem("theme", JSON.stringify(field));
    history.push("/result");
  };

  /**
   * @description - function to set selected color theme
   * @param {object} event
   *
   * @returns {void}
   */
  const colorThemeHandle = (event) => {
    const color = event.target.id;
    setField({ ...field, theme: color });
  };

  return (
    <div className="container">
      <h3 className="header">
        <i>Welcome!</i>
      </h3>
      <div className="mb-1">
        <DatePicker
          name="date"
          selected={field.date}
          onChange={(date) => setField({ ...field, date: date })}
          placeholder="YYYY-MM-DD"
          required
          dateFormat="yyyy-MM-dd"
          value={field.date}
        />
      </div>
      <InputField
        name="info"
        placeholder="Write message here..."
        value={field.info}
        onChange={handleChange}
        spellCheck="true"
      />
      <div className="flex-row">
        <img src={paleteIcon} className="logo" alt="" />
        <div className="flex-row margin-left">
          <div
            className={`color-box red-bg left-border-radius ${
              field.theme === "red" && "disabled"
            }`}
            onClick={colorThemeHandle}
            id="red"
          ></div>
          <div
            className={`color-box purple-bg ${
              field.theme === "purple" && "disabled"
            }`}
            onClick={colorThemeHandle}
            id="purple"
          ></div>
          <div
            className={`color-box green-bg ${
              field.theme === "green" && "disabled"
            }`}
            onClick={colorThemeHandle}
            id="green"
          ></div>
          <div
            className={`color-box brown-bg ${
              field.theme === "brown" && "disabled"
            }`}
            onClick={colorThemeHandle}
            id="brown"
          ></div>
          <div
            className={`color-box blue-bg right-border-radius ${
              field.theme === "blue" && "disabled"
            }`}
            onClick={colorThemeHandle}
            id="blue"
          ></div>
        </div>
      </div>
      <p className={`selected-col ${field.theme}`}>
        <span className="capitalize">{field.theme}</span>
        {field.theme && " theme selected"}
      </p>

      <Button
        name="Preview"
        disabled={
          field.date.length < 1 ||
          field.info.length < 5 ||
          field.theme.length < 1
        }
        onClick={handleSubmit}
      />
    </div>
  );
};

export default InputPage;
