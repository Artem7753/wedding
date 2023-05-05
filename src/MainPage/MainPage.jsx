import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import "./styles.scss";
import styles from "./MainPage.module.scss";
import { Colors } from "./colors/Colors";
import { Banner } from "./banner/Banner";
import { Program } from "./program/Program";
import { Map } from "./map/Map";
import { Carousel } from "react-responsive-carousel";
import guests from "../assets/guests.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CardGrid } from "./cards/Cards";

function importAll(r) {
  return r.keys().map(r);
}

const friendsImages = importAll(
  require.context("../assets/friends", false, /\.(png|jpe?g|svg)$/)
);
const images = importAll(
  require.context("../assets/all", false, /\.(png|jpe?g|svg)$/)
);

const MainPage = () => {
  const { who } = useParams();
  const guest = guests[who] || {
    value: ["Гость"],
    isMale: true,
    isFriends: false,
  };
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
        <Banner guests={guest.value || []} isMale={guest.isMale || false} />
        <Carousel showArrows className={styles.photoWrapper}>
          {images.map((image, index) => {
            return (
              <div className={styles.imageStyle}>
                <img src={image} />
              </div>
            );
          })}
        </Carousel>
        <Program />
        <Colors />
        <Map />
        {guest.isFriends && <CardGrid images={friendsImages} />}
      </div>
      <div className={styles.footer}>Скоро увидимся!</div>
    </div>
  );
};

export default MainPage;
