import React from "react";
import "./FlowerStyle.scss";
import flowerStyle from "../../../assets/image3.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const FlowerStyle = () => {
  return (
    <div className="flowerStyle">
      <div className="flowerStyle__style">
        <img
          className="flowerStyle__image"
          src={flowerStyle}
          alt="Flower Castus"
        />

        <div className="flowerStyle__wrapper">
          <h2 className="flowerStyle__title">styling trends & much more</h2>
          <p className="flowerStyle__text">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>

          <Link
            onClick={() =>
              window.open("https://en.wikipedia.org/wiki/Flower", "_blank")
            }
            className="flowerStyle__link"
          >
            Find More <ArrowRightAltIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlowerStyle;
