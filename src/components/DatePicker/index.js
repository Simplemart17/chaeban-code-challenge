import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../assets/icons/calendar.svg";

/**
 * @description - date picker component
 * @param {object} props
 *
 * @returns {JSX}
 */

const DatesPicker = (props) => {
  const ref = useRef();

  const CustomInput = ({ value, onClick }) => (
    <div className="relative">
      <input
        className={"date-input"}
        value={value}
        onClick={onClick}
        name={props.name}
        placeholder={props.placeholder}
        readOnly
      />
      <img
        onClick={onClick}
        src={calendarIcon}
        alt=""
        className="calender-icon relative"
      />
    </div>
  );

  return (
    <div className="relative left-1.5">
      <DatePicker
        {...props}
        selected={props.selected}
        onChange={props.onChange}
        customInput={<CustomInput />}
        customInputRef={ref}
      />
    </div>
  );
};

export default DatesPicker;
