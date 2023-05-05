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
  "https://downloader.disk.yandex.ru/preview/39c2d4cfb65b72016770649c3c04e9a2efca9dcec0bd5cbc7f4701eceffb30ed/64554107/FP8kn6sIDkKG_x9cp3p-NpSzKp4KhQI9CS_Wf6aCvsPl6F4zq7ENiNKCxF5yU_TZxN6nZPRmMZcBZZEO9B0OWA%3D%3D?uid=0&filename=2023-05-05%2016.45.33.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/31de37eb83f98eaece902057127b8eb8e5a5030e75a368fc5f168a64a2536266/64554107/ukxMc6vxQ1AZh2uwF77-CJSzKp4KhQI9CS_Wf6aCvsNREmwzAFClZe6SO3gGzIok3cewUtzPvK_hdEK-zpV8sA%3D%3D?uid=0&filename=2023-05-05%2016.45.37.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/532f908738ecd575159faba459c8993f54c47c33a847f71bd797532d47d660ec/64554107/Phzu-kCSAi2XUau-Dtav2ZSzKp4KhQI9CS_Wf6aCvsMZA2_ggV1OS4Eg7d4tpD3BXpBYhXAyoiOFAcxFsqAQPw%3D%3D?uid=0&filename=2023-05-05%2016.45.40.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/f519816a3732b05b774f53fc08a522b0d03f32259be050f7831cd43d8380cba9/64554107/bbRkgjzzeEgEa38e1PgdRpSzKp4KhQI9CS_Wf6aCvsPBmrMqhMxdY8PLpHwabysD_ZpQ79OD7HERc6n9yr8tQA%3D%3D?uid=0&filename=2023-05-05%2016.45.43.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
];

const friendsImages = [
  "https://downloader.disk.yandex.ru/preview/81ef67071de14e0ce128e24fec8e29bb6e58cc44d72bcfd31e613b273feef055/64553d06/CL99DwMr_YlvIRx46WrqRr8HFW2sIeI1hl_CjkytJSWw3ldIMOfcQwNZOkYmxPrO5BI7culGjVlKMyVV2SmGxw%3D%3D?uid=0&filename=1655475031534.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/047497477868a379cd87256f90cc033d07c26d3b34f1fa7b3b013ced8153da5d/64553d06/WD67UkFPulWATpj03k649l9YnSUaJIWHkaxTXYyCA0OtzOMgVn91GEE5wSNzNYITuMk-4tEa1O0Z6DGb7LMpww%3D%3D?uid=0&filename=1655477570136.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/8a29f59e13f1178b44512c1bd025a21197c9fbd43d1381f97dc5e64c8cd183fd/64553d06/T5MSJcBjCscu0PcfA8k-7XF_TE4r8FFhrGRyFcXpSWbwTWVZRQbjzSZKjHlqsw95lQusXUc4ehFx2x6O40mX4w%3D%3D?uid=0&filename=1671453252346.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/a1bfc338273b6bfd44981c66c91f6b551033ba197a6df41cb0412ae614648eda/64553d06/ht4Ser7hyUn7hUsJbVf_OHaSffKuFP28kpXzjHNs3eO8qzJELxoyw3eCcwPas4fu1ZGouKlHZ8WGHXZ12t4s5Q%3D%3D?uid=0&filename=1671455140267.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/59eeda06881146e3ece76a297805c79b98c73c398275d6b66479157d5dbf0ec3/64553d06/QUP-z5gc5BkRn6uDmHLPL78HFW2sIeI1hl_CjkytJSWoVntkqXqM47UqrbsokvbWBWQFsiRAMUgZXIF3ycZXIA%3D%3D?uid=0&filename=1671459363543.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/df0b5038ec07e167e38accde875c2c78259a2223a6f4c771906aed65c67ccb56/64553d06/8Y_Zje3ZPUwPlgpBBsvm-78HFW2sIeI1hl_CjkytJSUzD_3lAr3kdJmdUu98S_7H7AXxw0b5KvHcEeDkJ0ofDw%3D%3D?uid=0&filename=1671460785947.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/6389f508bf4742499583adc1e372a4e62d7e0970c4ef27c959b6bf7325acb576/64553d06/OT2u5xtpJb5M4PTxS_HCSF9YnSUaJIWHkaxTXYyCA0M2NfiKIFKkoJNapPCAmGxsqn26-wUMNIm8Ww8ERdMCPg%3D%3D?uid=0&filename=20221107_151735.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/de5dc84553bb1ce8e76e9e8c00c84579ec9356afbcec20d5b440425ebaecd2cb/64553d06/3B_mska18ZvJZ6dVLbfRr7ps7DHs8GyjtPChH6oljnSorD1nT_8Q5iOd9cOhBCYLkHwKBTKv2OIa1YVUfbrxfQ%3D%3D?uid=0&filename=305A5796.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/7130f7fa51cf834e4439d8932c821ca0c90f478979135cf22b75222285946b9b/64553d06/-V-O-sAak-ItmAc-zVZjSrps7DHs8GyjtPChH6oljnRr4okDCOjRLPCpqMVN6ksLeUx3x9DZ2hOnRUGz1nJhdw%3D%3D?uid=0&filename=IMG20220812171208.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/d1243bf3241c67d17d965151c1b2ba2ec362dd2480eed3f7fbd1953f374c26a7/64553d06/HrSZLN6IrwWYE3BuyFLzYLps7DHs8GyjtPChH6oljnS7qJ5x6pzUzzTkT9G4Cyyh37r6plEmYUrzbQKhQc1hIg%3D%3D?uid=0&filename=IMG20221029115224.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/7889c8e00b28d78314b6111ebc60d64c96fee84f74cb63f2947cc30d4953bdeb/64553d06/q45xfKsBpC7TkHROetZ1wL8HFW2sIeI1hl_CjkytJSUv2m_arZZA-h1WnQanWSOerme4UrdLFtNdoFj0HE2Mug%3D%3D?uid=0&filename=IMG20221105172345.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/dcd16225ef391db2d5b3bad25c3a02adc5ab9cd463a1fe4f7930973a45a2030f/64553d06/8ZWZ__aViJu2A3r1JeLYz7ps7DHs8GyjtPChH6oljnTiYtgJgGkkpQHooMoaszClGYBR5IcxQ0YZWUGKNZDqEQ%3D%3D?uid=0&filename=IMG_20201101_003235.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/689787f19bc155a7bcc208f0babacac8769b958d96ea0cb42dc205293719a64d/64553d06/dO7atJuToZX2fxbLqEtfeL8HFW2sIeI1hl_CjkytJSUmAT2iV-rPyeSBrSwnxZgmvQ0qe7BF-F58V8CGDEN6kg%3D%3D?uid=0&filename=IMG_20201107_020736.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/6cd40438242dd9b8ec124b9408a1fe8c183c5d0345d8e3cc617d54271bdc7279/64553d06/d2GerfEzyJ7YZWYwF-rqH78HFW2sIeI1hl_CjkytJSW-O5CY6H4CWWh8H0q_NoRYJD054aJtfWNs-Stxjpw3wA%3D%3D?uid=0&filename=IMG_20210417_190725.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/db7cc4875b8af566ff0481c899001759062843d363e801ec3378157f09518943/64553d06/PpLHKM3opKqqFbUD9IjCcKEkw6VOcvTCMIjdjjWKI85yP-3KUB0zIadppBu-1z3OeT7tyVL5bwVgQpoUIAnPEA%3D%3D?uid=0&filename=IMG_20230430_135024_541.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/8bc8313a0574961b447567eb6b49ec20a2d31150bec14473cf655f745cc9c68a/64553d06/4j0r-zni1xbNId-WwWK2UtzPGzVnFj0zqrorH-d4weHnD53QU_yzsWRrTWiYY_bd-AV36-xpl6ApT8-1uXdfeQ%3D%3D?uid=0&filename=IMG_20230430_135033_502.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/de58089201ab050e49f34d6c0c86160d585054f0ca326498f477ecd86522d71a/64553f0b/JTbiw_1qlO6RTYqVZ6cH5ePZ9ODMqg4GUn8jBgoJWARVsF0IJsVoJQtiG61q-lkw1A0LR8dswyO4Hnq7pzlt0Q%3D%3D?uid=0&filename=2023-05-05%2016.36.42.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/35780dd5535b1df0671b7ebf53f51362c580d31051e25f520c21b8e25393d3d5/64553f0b/PnGgylfsQt-_KRQigmUX4-PZ9ODMqg4GUn8jBgoJWATmIfirIfZb4F3aF3jVvymDF86E30SzQhy_jiU2z_o1ug%3D%3D?uid=0&filename=2023-05-05%2016.37.15.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/533bbefee2b95a7e338d1a2416cb7e6fe7c6bb730b08638de5c62cf815c7dad4/64553f0b/ckiX2-TQe_xz8AHxeqp4LI-VwRHkbVMk_SRVzXRK94rvMtI8RwFRnpG1oZVNQM-sQwHH2EkbTfwd4nUYGb8jBw%3D%3D?uid=0&filename=2023-05-05%2016.37.46.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/4ecacf5eb9eee422ccfebab7023c63341c252cd45f5aee9e2ae7759e427ebacd/64553f0b/5n1_fFl4hJkuXc7PjAj5-aeS7cWEGOFOXwvU8oqrDDB6HgzhwaoNxVVFgF-jIGdYCnDujtkJsxaPWdu7hVDrAg%3D%3D?uid=0&filename=2023-05-05%2016.36.48.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/c01046316272817784c2fd5cbcfbb1bbbf0c74cbfc57d8300e1e700f0055331f/64553f0b/AXNT7Sqx2iDwV_hIBlFWduPZ9ODMqg4GUn8jBgoJWAQHHR1bpmJ4T7Pz5Ee4IdZ_-jBqDv9Q6Q23BPuA8NRLlA%3D%3D?uid=0&filename=2023-05-05%2016.36.57.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
  "https://downloader.disk.yandex.ru/preview/519087ff8ebc5b107911a3b9994ee0d907e415ff2c1107cfca0012c8d5965f9f/64553f0b/DIuAmclHtu866hVWJacXTOPZ9ODMqg4GUn8jBgoJWARpT8aYyhV_mctIX0w4rha-moBKvqFNPrWvFvVkAQWNSg%3D%3D?uid=0&filename=2023-05-05%2016.37.08.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1915x1272",
]

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
        <CardGrid images={friendsImages} />
      </div>
      <div className={styles.footer}>Скоро увидимся!</div>
    </div>
  );
};

export default MainPage;
