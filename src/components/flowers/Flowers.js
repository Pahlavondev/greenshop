import React from "react";
import FlowerCastus from "./flower-castus/FlowerCastus";
import FlowerStyle from "./flower-style/FlowerStyle";
import "./Flowers.scss";

const Flowers = () => {
  return (
    <div className="flowers">
      <div className="container">
        <div className="flowers__wrapper">
          <FlowerCastus />
          <FlowerStyle />
        </div>
      </div>
    </div>
  );
};

export default Flowers;
