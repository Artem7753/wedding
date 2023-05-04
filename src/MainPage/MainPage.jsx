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

const images = [
  "https://1.downloader.disk.yandex.ru/preview/5e4e9069b5ebad1402bff9667650892f749b96ffcb34ee36dd4251d917a48bce/inf/nF0o7fNbd0LnBOou2gmyyOHX_52E1LY_k24mGj6EP4CjZT8WgBonNmeDlQ3cehlx8kP5yUfob6kuFNResiI7vQ%3D%3D?uid=163315002&filename=1671455140060.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=1915x1272",
  "https://2.downloader.disk.yandex.ru/preview/1e1ef4ece5a5731c16c66e06409d49f8af649be9c782efe2076c5c35658f3e01/inf/vDlXCXakqL1F_MgvlkyP5gyft34u9G8aPCefHuVX87S21qpS0mrPpIyIS2Z2AsKV1UspqQOhF2UsrfyuMFseSA%3D%3D?uid=163315002&filename=IMG20220718220954.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=1915x1272",
  "https://4.downloader.disk.yandex.ru/preview/ec0150f64be2fd1fa641a451acc377221bc5348d6d55b4ea6cc9ce29e7540a55/inf/uVFk38CVVHMKke--DCVZFOHX_52E1LY_k24mGj6EP4CS44hoZVtisVi4bCe2c_fcof_HjsOHpRn4V7qNM6EtPA%3D%3D?uid=163315002&filename=IMG20220719170844_01.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=1915x1272",
  "https://3.downloader.disk.yandex.ru/preview/a99da7fd0b4a35da0a89f3cad542a8e43d295da4dc6478f17a9d2e7d9dce7ee6/inf/02AbOG8P8QxS0A0f8Xt3YeHX_52E1LY_k24mGj6EP4Afd563QaUDmMN0AeaEDSSmDI7NKfThNW9QabZpk8tZBQ%3D%3D?uid=163315002&filename=IMG20221105150035.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=1915x1272",
  "https://3.downloader.disk.yandex.ru/preview/cc9d91c839e464a1cb05bbdc3a690c5022ed8283e7f8264ddf71d82aaa08edc2/inf/cYy4A0vyw6Sffeo2oDeAkG_okiPXra4dtuvt03Qyw3gb-II8C8TEVD6iDamFijxCUeBRNfbA4Zs5uM9fVzQCQA%3D%3D?uid=163315002&filename=IMG20221218150812.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=1915x1272",
  "https://2.downloader.disk.yandex.ru/preview/b32202fd016d8ac8069d47a38bedfc512abda45e8f05bb61f77372372a5fafec/inf/eJFkM-is7WwTnN8AUt6Y0m_okiPXra4dtuvt03Qyw3iWLKJfgU1JwnZhFS_mUY3tLGN-uQO6f0N-UJXHpDIyGw%3D%3D?uid=163315002&filename=IMG20221223172201.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=1915x1272",
  "https://1.downloader.disk.yandex.ru/preview/22b18fd5c0cc3b7ab4a0bf05a74f10ae350ac1d33758140b8266f47ed428da9d/inf/5mw8ht2RAsBZl5Uh-ezzG2_okiPXra4dtuvt03Qyw3gnjLfv218kblRjUb12QgP5eHkqAFtFlD88ieqw3Sm31Q%3D%3D?uid=163315002&filename=IMG20230103143530.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=1915x1272",
  "https://4.downloader.disk.yandex.ru/preview/4f84f81c454a8d1a4b15dd9d6449065b4c12e60cf13e72fae3fcb4a45091b78a/inf/YGYJHYkiQ_niEQsswlvZEW_okiPXra4dtuvt03Qyw3iKLOa6yeI66nu1fAJA_ppCANwqk1RppJVQrV_ydaMszQ%3D%3D?uid=163315002&filename=IMG20230308144527.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=1915x1272",
  "https://2.downloader.disk.yandex.ru/preview/9c9a8aa4b6f79c9c42d3cd10770341335e79b2a4f82e751c6156c5269c7cfbea/inf/8Y_Zje3ZPUwPlgpBBsvm-2_okiPXra4dtuvt03Qyw3jGf6GqGrptDlbcbOtDUo8aJw67FwR6MkeYIZOAEpcI6w%3D%3D?uid=163315002&filename=IMG20230403172125.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=1915x1272",
  "https://1.downloader.disk.yandex.ru/preview/f986a7d990dcfd814521c43dab067179f2ec112fd948a809bb221a93a71058cd/inf/0JGY4Yb32RaCNvIrY6AA-OHX_52E1LY_k24mGj6EP4DGKol0PlOQnOxbXy6SiKxIAj3ut99Pxk-AwdxCpmiUVQ%3D%3D?uid=163315002&filename=art_tor-49.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=1915x1272",
  "https://1.downloader.disk.yandex.ru/preview/d72f74aca85ddd73ff178a1e545f20558a07e2073ddfd558d102191b26f638d4/inf/UDX251Tj1ooJq2gxH08CROHX_52E1LY_k24mGj6EP4DN-M9XsAtoX7i0jgY5WedpN3g27y5ZuvKLhbZGiQOcSg%3D%3D?uid=163315002&filename=art_tor-59.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=163315002&tknv=v2&size=1915x1272",
];

const MainPage = () => {
  const { who } = useParams();
  const guest = guests[who] || {value: ["Гость"], isMale: true};
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
        <Banner guests={guest.value || []} isMale={guest.isMale || false}/>
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
      </div>
      <div className={styles.footer}>Скоро увидимся!</div>
    </div>
  );
};

export default MainPage;
