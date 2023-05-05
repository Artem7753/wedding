import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InfoPage.module.scss";

const InfoPage = () => {
  const navigate = useNavigate();

  return <div className={styles.wrapper}></div>;
};

export default InfoPage;
