import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import "./styles.scss";
import styles from "./MainPage.module.scss";
import { Colors } from "./colors/Colors";
import { Banner } from "./banner/Banner";
import { Program } from "./program/Program";
import { Map } from "./map/Map";
import Carousel from "./carousel/Carousel";

const MainPage = () => {
  const { who } = useParams();
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <ul className={styles.menu}>
          <li>
            <a href="#where">где</a>
          </li>
          <li>
            <a href="#when">когда</a>
          </li>
          <li>
            <a href="#dress">что надеть</a>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <Banner />
        <Carousel
          images={[
            "https://1.downloader.disk.yandex.ru/preview/492e1e742c7e5ece9ba6ae162a43c940611584512f2c4e6c4eebf8e92e750d62/inf/Gz9xWIjEVN4roD4atqB9opHyAXQfItVoKtsOtfpjzHuEGBHfxgqzQUWybkudIODCWFZVHUUyJMMTWYcawahs_A%3D%3D?uid=163315002&filename=IMG_20230430_135103_369.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=3456x1938",
            "https://4.downloader.disk.yandex.ru/preview/60d9dba8c4db8154cb7b11618cb5288104b9c21f28709e3de0f0781e07788e82/inf/pMCgOBfWDj9B3QAiHZnTwJpfXhikDYiyea1lz2FHjkxb2JcNt9Frc5UEu0wD2dD6I_E53l6t0J9aMH-zxlPTaw%3D%3D?uid=163315002&filename=art_tor-49.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=3456x1938",
          ]}
        />
        <Program />
        <Colors />
        <Map />
      </div>
      <div className={styles.footer}>Скоро увидимся!</div>
    </div>
  );
};

export default MainPage;
