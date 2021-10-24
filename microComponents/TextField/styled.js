// * node_modules
import styled from "styled-components";

// * components
const TextField = styled.input`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 4px 8px;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  transition: all 0.4s;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderGray};
  }
`;

export default TextField;
