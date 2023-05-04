import React from "react";
import "./styles.scss";

export const Map = () => {
  return (
    <section class="map" id="#where">
      <h2>Будем рады видеть вас на нашей свадьбе!</h2>
      <div class="map__frame">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A098190a385f09baa7a1e5154ca0aeb83b02565348ddd1ca31432a011f3f18d11&amp;source=constructor"
          width="669"
          height="500"
          frameborder="0"
        ></iframe>
      </div>
      <p class="map__location">
        Наш адрес: Рязанская область, г. Рязань, ул. Кудрявцева, 25
        гостиница "Арагон"
      </p>
    </section>
  );
};
