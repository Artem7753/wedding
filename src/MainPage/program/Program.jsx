import React from "react";
import "./styles.scss";

export const Program = () => {
  return (
    <section class="program" id="#when">
      <h2>Программа мероприятия</h2>
      <ul class="program__list">
        <li class="program__item">
          <span class="program__time">15:00</span>
          Регистрация гостей
        </li>
        <li class="program__item">
          <span class="program__time">16:00</span>
          Официальная церемония бракосочетания
        </li>
        <li class="program__item">
          <span class="program__time">17:00</span>
          Начало торжественного ужина
        </li>
      </ul>
    </section>
  );
};
