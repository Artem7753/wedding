import React from "react";
import backgroundVideo from "../../assets/background.mp4";
import styles from "./styles.scss";

export const Banner = ({ guests, isMale }) => {
  const getText = () => {
    if (guests.length == 2) {
      return `Дорогие ${guests[0]} и ${guests[1]}`;
    }
    if (guests.length > 2) {
      return `Дорогие ${guests.join(", ")}`;
    }
    if (isMale) {
      return `Дорогой ${guests[0]}`;
    }
    return `Дорогая ${guests[0]}`;
  };
  return (
    <>
      <div class="video-bg">
        <video autoPlay muted loop class="video-bg__video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="video-bg__overlay"></div>
        <div class="video-bg__content">
          <h2>Анна&Артем</h2>
          <p className="guests">{getText()}!</p>
          <p className="date">08 | ИЮЛЯ | 2023</p>
        </div>
      </div>
      <p>
        Мы рады пригласить вас на нашу свадьбу! Мы оба так счастливы и
        воодушевлены и невероятно хотим поделиться этой радостью с вами. Мы
        хотим, чтобы этот день запомнился нам и вам на всю жизнь!
      </p>
    </>
  );
};
