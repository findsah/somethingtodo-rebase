import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({
  type,
  text,
  onClick,
}) => (
  <button
    variant="contained"
    type={type}
    className="btn-main"
    size="medium"
    onClick={(event) => (onClick !== undefined ? onClick(event) : null)}
  >
    {text}
  </button>
);

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  text: "submit",
  height: "100px",
  width: "40px",
  color: " PropTypes",
  bgColor: "PropTypes",
  onClick: PropTypes.func,
};


export default CustomButton;
