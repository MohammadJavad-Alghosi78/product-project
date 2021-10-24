// * node_modules
import React from "react";
import Head from "next/head";

// * Components
import Template from "components/common/Template";
import Button from "microComponents/Button";
import Input from "microComponents/TextField";

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
        <Input type="text" placeholder="username" />
        <Button variant="primary">OUTLINE</Button>
      </Template>
    </React.Fragment>
  );
};

export default Home;
