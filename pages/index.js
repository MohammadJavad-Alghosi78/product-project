// * node_modules
import Head from "next/head";

// * Components
import Button from "microComponents/Button";
import Template from "components/common/Template";
import React from "react";

// * JSX
const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Products App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template>
        <h1>PRODUCTS PROJECT</h1>
        <Button variant="primary">PRIMARY</Button>
        <Button variant="outline">OUTLINE</Button>
      </Template>
    </React.Fragment>
  );
};

export default Home;
