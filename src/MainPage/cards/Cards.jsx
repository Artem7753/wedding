import React from "react";
import "./styles.scss";

export const CardGrid = ({ images }) => {
  return (
    <div className="card-grid">
      {images.map((item) => (
        <div className="card">
          <img src={item} />
        </div>
      ))}
    </div>
  );
};
