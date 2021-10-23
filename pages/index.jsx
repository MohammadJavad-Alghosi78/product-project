// node_modules
import { useEffect } from "react";
import Head from "next/head";
import http from "../config/axios";

// JSX
const Home = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>PRODUCTS PROJECT</h1>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await http.post("/auth/login", {
    username: "mor_2314",
    password: "83r5^_",
  });

  return {
    props: {
      data: response.data.token,
    },
  };
};

export default Home;
