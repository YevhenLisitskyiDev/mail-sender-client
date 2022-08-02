import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mail sender</title>
      </Head>
      Here will be project info (README copy for example)
      <Button variant="contained">Colorfull button</Button>
    </div>
  );
};

export default Home;
