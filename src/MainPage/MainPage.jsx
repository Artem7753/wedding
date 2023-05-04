import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import "./styles.scss";
import styles from "./MainPage.module.scss";
import { Colors } from "./colors/Colors";
import { Banner } from "./banner/Banner";
import { Program } from "./program/Program";
import { Map } from "./map/Map";
import Carousel from "nuka-carousel"

const images=[
  "https://downloader.disk.yandex.ru/preview/8284d11980533b3aa918ca24a95fc6de532b9390744385fc8fc9d7acd2f02b2b/6453d645/Gz9xWIjEVN4roD4atqB9opHyAXQfItVoKtsOtfpjzHuEGBHfxgqzQUWybkudIODCWFZVHUUyJMMTWYcawahs_A%3D%3D?uid=0&filename=IMG_20230430_135103_369.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
  "https://downloader.disk.yandex.ru/preview/3563f6b0fd552fd9c79fb15d9fedc764e50a4cd7aa2cf8c00b46b7145be02149/6453d71b/YboCw4_d2yQ34C1e5sepBauO4okp_0EOq9Z0eoeSmSxxZHV_nMI0o0VJ_L-QMk_54oD1bckfoH01GpHLAehhmQ%3D%3D?uid=0&filename=IMG20220712004248.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
];

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
        <Carousel autoplay autoplayInterval={2} cellAlign='center' adaptiveHeight>
          {images.map((image, index) => {
            return <img src={image} />
          })}
        </Carousel>
        <Program />
        <Colors />
        <Map />
      </div>
      <div className={styles.footer}>Скоро увидимся!</div>
    </div>
  );
};

export default MainPage;
