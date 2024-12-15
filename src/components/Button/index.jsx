import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const ReusableButton = ({
  bgcolor,
  width,
  size,
  text,
  onClick,
  hoverColor,
  color,
}) => {
  const buttonStyle = {
    backgroundColor: bgcolor || "#ab3b61",
    width: width || "auto",
    fontSize: size || "16px",
    border: "none",
    borderRadius: "4px",
    color: color || "white",
    cursor: "pointer",
    padding: "10px 20px",
    transition: "background-color 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: hoverColor || "#0056b3", // Default hover color
  };

  return (
    <button
      style={buttonStyle}
      className='custom-button'
      onClick={onClick || (() => {})}
      onMouseOver={(e) =>
        (e.target.style.backgroundColor = hoverStyle.backgroundColor)
      } 
      onMouseOut={(e) =>
        (e.target.style.backgroundColor = buttonStyle.backgroundColor)
      }>
      {text}
    </button>
  );
};

ReusableButton.defaultProps = {
  bgcolor: "#007bff",
  color: "#ffff",
  width: "auto",
  size: "16px",
  text: "Click Me",
  onClick: () => {},
  hoverColor: "#edc7b8",
};

ReusableButton.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  hoverColor: PropTypes.string,
};

export default ReusableButton;
