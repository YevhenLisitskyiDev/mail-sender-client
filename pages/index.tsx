import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mail sender</title>
      </Head>
      Here will be project info (README copy for example)
    </div>
  );
};

export default Home;
