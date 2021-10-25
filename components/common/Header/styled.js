// * node_modules
import styled from "styled-components";

// * components
export const HeaderWrapper = styled.header`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  direction: rtl;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Sidebar = styled.ul`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  width: 0;
  height: 100%;
  padding: 12px;
  list-style: none;
  position: absolute;
  top: 0px;
  right: 0;
  z-index: -10;
  transition: all 0.5s;
  opacity: 0;

  .close-icon {
    width: 24px;
    height: 24px;
  }
`;

export const SidebarElement = styled.li`
  border: 1px solid white;
`;
