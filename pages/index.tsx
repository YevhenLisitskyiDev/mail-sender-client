import { Box, Button, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mail sender</title>
      </Head>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}>
        <Grid item xs={3}>
          {/* Create header with paragraph an 2 buttons */}
          <Typography variant="h1">Welcome to my Mails Sender app</Typography>
          <Typography variant="subtitle1" mt={3}>
            This is a simple app to send emails to your contacts. To use it
            plaese{" "}
            <Button variant="outlined" color="primary">
              login
            </Button>{" "}
            or{" "}
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
