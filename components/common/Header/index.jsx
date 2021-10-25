// * node_modules
import React from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

// * components
import Button from "microComponents/Button";

// * Styles
import { HeaderWrapper, Sidebar, SidebarElement } from "./styled";

// * JSX
const Header = () => {
  // * States
  const [isMobile, setIsMobile] = React.useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  // * Refs
  const sidebarRef = React.useRef();

  // * Handlers
  const handleShowSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarProp = (flag) => {
    if (flag) {
      sidebarRef.current.style.width = "100%";
      sidebarRef.current.style.zIndex = "100";
      sidebarRef.current.style.opacity = "1";
    } else {
      sidebarRef.current.style.width = "0";
      sidebarRef.current.style.zIndex = "-1";
      sidebarRef.current.style.opacity = "0";
    }
  };

  React.useEffect(() => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  React.useEffect(() => {
    handleSidebarProp(isSidebarOpen);
  }, [isSidebarOpen]);

  if (isMobile) {
    return (
      <HeaderWrapper>
        <AiOutlineMenu onClick={handleShowSidebar} />
        <h3>Product Project</h3>
        <Sidebar ref={sidebarRef}>
          <AiOutlineCloseCircle
            onClick={handleShowSidebar}
            className="close-icon"
          />
          <SidebarElement>ksjafkljsakldfjkljkl</SidebarElement>
        </Sidebar>
      </HeaderWrapper>
    );
  }

  return (
    <HeaderWrapper>
      <Button variant="primary">Sign In</Button>
      <h1>Product Project</h1>
    </HeaderWrapper>
  );
};

export default Header;
