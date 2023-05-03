import React from "react";
import backgroundVideo from "../../assets/backround.mp4";
import styles from "./styles.scss";

export const Banner = () => {
  return (
    <div class="video-bg">
      <video autoPlay muted loop class="video-bg__video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="video-bg__overlay"></div>
      <div class="video-bg__content">
        <h2>Анна&Артем</h2>
        <p>Дорогие наши гости!</p>
        <p>Мы рады пригласить вас на нашу свадьбу! Мы оба так счастливы и воодушевлены и невероятно хотим поделиться этой радостью с вами. Мы хотим, чтобы этот день запомнился нам и вам на всю жизнь!</p>
        {/* <div class="video-bg__images">
          <img
            src="https://1.downloader.disk.yandex.ru/preview/f5ccaca835b89b25f4a36a4ae6a6ba5dfd46e206952acf7f6560ef8435feae43/inf/CaRXLl8hG7FofUmm4Q5delYv0fH7Pb7hlD83KLvuiLaDQAJi_DBxHacvkCofedeVr4ODnvXcZsDS7isk8f9QCA%3D%3D?uid=163315002&filename=IMG_20230430_135052_194.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=3456x1938"
            alt=""
            class="video-bg__image"
          />
          <img
            src="https://4.downloader.disk.yandex.ru/preview/108b4c16a78295b467e732f3cbffea1068f0741d08ac17770d9e027de72461a2/inf/cfRSCF3dCVVx9y23NshRIgvzW0DFZCbQAS9n0VjyqdDckA2GFLPaLLeAHHqanZW0sVItgjck8ajXVy5LOgrNrw%3D%3D?uid=163315002&filename=IMG_20230430_135055_944.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=3456x1938"
            alt=""
            class="video-bg__image"
          />
        </div> */}
        <p>08 | ИЮЛЯ | 2023</p>
      </div>
    </div>
  );
};
