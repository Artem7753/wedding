import React from "react";
import "./styles.scss";

export const Colors = () => {
  return (
    <section class="colors" id="#dress">
      <h2>Надень что то похожее по цвету:</h2>
      <div class="colors__list">
        <div class="colors__item colors__item--red"></div>
        <div class="colors__item colors__item--yellow"></div>
        <div class="colors__item colors__item--green"></div>
        <div class="colors__item colors__item--blue"></div>
        <div class="colors__item colors__item--purple"></div>
      </div>
    </section>
  );
};
