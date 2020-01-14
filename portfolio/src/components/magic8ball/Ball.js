import React from "react";
import AnimateOnChange from "react-animate-on-change";
import PropTypes from "prop-types";
import getRandomOption from "./getRandom";
import "./style.scss";

const Ball = ({ updateState, options, answer, lang }) => (
  <div>
    <div
      onClick={Ball.handleRandomOption(updateState, options)}
      className="ball"
    >
      <div className="surfice" />
      <div className="ball__tag">
        {answer ? (
          <AnimateOnChange
            baseClassName="ball__answer"
            animationClassName="ball__answer--animate"
            animate={true}
          >
            {answer}
          </AnimateOnChange>
        ) : (
          <span className="ball__number">8</span>
        )}
      </div>
    </div>
    <button onClick={Ball.onReset(updateState)} className="reset-btn">
      {lang === "es" ? "Elegir Idioma" : "Choose Language"}
    </button>
  </div>
);

Ball.onReset = updateState => e => {
  e.preventDefault();
  updateState({
    lang: "",
    answer: ""
  });
};

Ball.handleRandomOption = (updateState, options) => e => {
  e.preventDefault();
  const answer = getRandomOption(options);
  if (options.length === 0) return;
  updateState({ answer });
};

Ball.propTypes = {
  updateState: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  answer: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired
};

export default Ball;