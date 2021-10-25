// * node_modules
import React from "react";

// * Components
import Container from "components/common/Container";
import Header from "components/common/Header";
import Footer from "components/common/Footer";

const Template = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Template;
