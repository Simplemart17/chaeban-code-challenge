import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BackButton from "../../components/BackButton";
import githublogo from "../../assets/icons/github-logo.png";

const ResultPage = () => {
  const history = useHistory();
  const [state, setState] = useState();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("theme"));
    setState(data);
  }, []);

  /**
   * @description - function to initiate navigation to input page
   * @param {object} event
   *
   * @returns {void}
   */
  const handleClick = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <div className={`container ${state && state.theme}-bg`}>
      <div className="flex-row">
        <img src={githublogo} alt="" className="github" />
        <a href="www.google.com">Github code review</a>
      </div>
      <div style={{ fontSize: "40px", lineHeight: 2, fontWeight: 700 }}>
        {new Date(state && state.date).toString().slice(0, 15)}
      </div>
      <p
        style={{
          maxWidth: "50%",
          textAlign: "justify",
          textJustify: "inter-character",
          lineHeight: 1.5,
        }}
      >
        {state && state.info}
      </p>
      <BackButton text="Go back to input page" onClick={handleClick} />
    </div>
  );
};

export default ResultPage;
