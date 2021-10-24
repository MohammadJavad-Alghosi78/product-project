// * node_modules
import React from "react";

// * Components
import Header from "components/common/Header";
import Footer from "components/common/Footer";

const Template = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Template;
