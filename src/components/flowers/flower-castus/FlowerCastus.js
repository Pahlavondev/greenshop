import React from "react";
import "./FlowerCastus.scss";
import flowerCastus from "../../../assets/image5.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const FlowerCastus = () => {
  return (
    <div className="flower">
      <div className="flower__castus">
        <img className="flower__image" src={flowerCastus} alt="Flower Castus" />

        <div className="flower__wrapper">
          <h2 className="flower__title">summer cactus & succulents</h2>
          <p className="flower__text">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>

          <Link
            onClick={() =>
              window.open("https://en.wikipedia.org/wiki/Cactus", "_blank")
            }
            className="flower__link"
          >
            Find More <ArrowRightAltIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlowerCastus;
