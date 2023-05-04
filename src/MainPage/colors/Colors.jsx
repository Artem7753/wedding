import React from "react";
import "./styles.scss";

export const Colors = () => {
  return (
    <section class="colors" id="dress">
      <h2>Дресс-код мероприятия</h2>
      <div class="colors__list">
        <h3>Мы просим придерживаться классического стиля. Это поможет создать более торжественную атмосферу и подчеркнуть важность этого дня.<hr></hr>
          Мы будем очень рады, если вы сможете добавить немного <span className="green">зеленого</span> в свой образ, это будет замечательным дополнением общей атмосферы. </h3>
      </div>
    </section>
  );
};
