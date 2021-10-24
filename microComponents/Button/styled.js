// * node_modules
import styled, { css } from "styled-components";

// * Handlers
const detectVariant = (variant) => {
  const cssObjMap = {
    primary: () => css`
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};
    `,
    outline: () => css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.red};
      border: 1px solid ${({ theme }) => theme.colors.red};
    `,
  };
  return cssObjMap[variant];
};

// * components
const Button = styled.button`
  border-radius: 10px;
  border: 0;
  padding: 8px;
  cursor: pointer;
  ${({ variant }) => detectVariant(variant)};
`;

export default Button;
