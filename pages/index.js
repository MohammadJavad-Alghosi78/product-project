// * node_modules
import Head from "next/head";

// * Components
import Button from "microComponents/Button";

// * JSX
const Home = () => {
  return (
    <div>
      <Head>
        <title>Products App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>PRODUCTS PROJECT</h1>
        <Button variant="primary">PRIMARY</Button>
        <Button variant="outline">OUTLINE</Button>
      </main>
    </div>
  );
};

export default Home;
