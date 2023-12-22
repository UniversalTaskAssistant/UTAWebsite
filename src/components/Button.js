import React from "react";
import { purple } from "./styles";
// Defining the button component as an arrow function
const Button = ({ onClick, title }) => (
  <button
    onClick={onClick}
    className="hover-box"
    style={{
      backgroundColor: purple,
      border: "none",
      padding: "10px 20px",
      textAlign: "center",
      display: "inline-block",
      color: "white",
      margin: "4px 2px",
      borderRadius: "16px",
    }}
  >
    {title}
  </button>
);

export default Button;
