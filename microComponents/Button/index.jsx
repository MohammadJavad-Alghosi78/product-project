// * node_modules
import React from "react";

// * Styles
import Button from "./styled";

const ButtonRoot = ({ children, variant, color, className }) => {
  return (
    <Button variant={variant} color={color} className={className}>
      {children}
    </Button>
  );
};

export default ButtonRoot;
