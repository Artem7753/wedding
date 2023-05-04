import React from "react";
import "./styles.scss";

export const Program = () => {
  return (
    <section class="program" id="when">
      <h2>Программа мероприятия</h2>
      <ul class="program__list">
        <li class="program__item">
          <h2>Регистрация</h2>
          <h2 class="program__time">14.30</h2>
          <img src="https://thumb.tildacdn.com/tild6631-3433-4436-a666-306262383831/-/resize/290x/-/format/webp/_1-2.png" />
          <h2 class="program__time">Территориальный отдел ЗАГС №1 по г. Рязани, Московское шоссе, 49 (присутствие по желанию)</h2>
        </li>
        <hr></hr>
        <li class="program__item">
          <h2>Банкет</h2>
          <h2 class="program__time">16.30</h2>
          <img src="https://thumb.tildacdn.com/tild6336-6439-4662-a230-303163323237/-/resize/290x/-/format/webp/_3.png" />
          <h2 class="program__time">Ресторан Арагон, ул. Кудрявцева, 25</h2>
        </li>
      </ul>
    </section>
  );
};
