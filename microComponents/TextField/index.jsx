// * node_modules
import React from "react";

// * Styles
import TextField from "./styled";

// * JSX
const Input = ({ type, placeholder }) => {
  return <TextField type={type} placeholder={placeholder} />;
};

export default Input;
