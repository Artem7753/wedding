import React from "react";
import { useParams } from "react-router-dom";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const { who } = useParams();
  return <div className={styles.wrapper}>hello {who}</div>;
};

export default MainPage;
