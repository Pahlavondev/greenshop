import React from "react";
import "./FooterTop.scss";
import imageGarden from "../../../assets/garden-care.svg";
import imagePlant from "../../../assets/plant-renovation.svg";
import imageWatering from "../../../assets/watering-graden.svg";

const FooterTop = () => {
  return (
    <div className="footerTop">
      <div className="footerTop__wrapper">
        <ul className="footerTop__list">
          <li className="footerTop__item">
            <img
              className="footerTop__image"
              src={imageGarden}
              alt="Garden Care"
            />

            <h3 className="footerTop__title">Garden Care</h3>
            <p className="footerTop__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </li>

          <li className="footerTop__item">
            <img
              className="footerTop__image"
              src={imagePlant}
              alt="Plant Renovation"
            />

            <h3 className="footerTop__title">Plant Renovation</h3>
            <p className="footerTop__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </li>

          <li className="footerTop__item">
            <img
              className="footerTop__image"
              src={imageWatering}
              alt="Watering Graden"
            />

            <h3 className="footerTop__title">Watering Graden</h3>
            <p className="footerTop__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </li>
        </ul>

        <div className="footerTop__content">
          <h2 className="footerTop__subtitle">
            Would you like to join newsletters?
          </h2>

          <form className="footerTop__form">
            <input
              className="footerTop__input"
              type="text"
              placeholder="enter your email address..."
            />
            <button className="footerTop__button">Join</button>
          </form>

          <p className="footerTop__description">
            We usually post offers and challenges in newsletter. We're your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
