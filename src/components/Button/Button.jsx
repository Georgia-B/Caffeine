import React from "react";
// import PropTypes from "prop-types";
import * as styles from "./Button.module.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

// Button.propTypes = {
//   text: PropTypes.string,
//   type: PropTypes.string,
//   onClick: PropTypes.func,
// };

export default Button;
