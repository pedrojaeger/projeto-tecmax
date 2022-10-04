import type { NextPage } from "next";
import * as React from "react";
import NavBarApp from "./components/navbar";
import FormsApp from "./components/forms";
import Layout from "./components/layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <FormsApp />
      <Link href="/components/simulador">aqui</Link>
    </>
  );
};

export default Home;
