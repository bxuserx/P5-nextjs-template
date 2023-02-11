import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
//import P5Sketch from "../components/P5Sketch";
const P5Sketch = React.lazy(() => import("../components/P5Sketch"));
import React, { useEffect, useMemo, useState, Component } from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <P5Wrapper>
        <P5Sketch />
      </P5Wrapper>
      {/* <Image
        src="/next.svg"
        alt="Nextjs Logo"
        width={100}
        height={24}
        priority
      /> */}
    </>
  );
}

const P5Wrapper = styled.div`
  //display: flex;
  //justify-content: center;
  // margin: 100px 20px;
  //border-style: solid;
  //border-color: blue;
  //border-width: 5px;
  background-color: blue;
  z-index: 1;
`;
