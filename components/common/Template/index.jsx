// * node_modules
import React from "react";

// * Components
import Container from "components/common/Container";
import Header from "components/common/Header";
import Footer from "components/common/Footer";

const Template = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
};

export default Template;
