import React from "react";
import "./FooterMain.scss";
import logo from "../../../assets/logo.svg";
import location from "../../../assets/Location.svg";
import message from "../../../assets/Message.svg";
import phone from "../../../assets/Calling.svg";

const FooterMain = () => {
  return (
    <div className="FooterMain">
      <div className="FooterMain__wrapper">
        <ul className="FooterMain__list">
          <li className="FooterMain__item">
            <img className="FooterMain__logo" src={logo} alt="GreenShop" />
          </li>

          <li className="FooterMain__item">
            <img className="FooterMain__image" src={location} alt="Location" />
            <p className="FooterMain__text">
              70 West Buckingham Ave. Farmingdale, NY 11735
            </p>
          </li>

          <li className="FooterMain__item">
            <img className="FooterMain__image" src={message} alt="Message" />
            <p className="FooterMain__text">contact@greenshop.com</p>
          </li>

          <li className="FooterMain__item">
            <img className="FooterMain__image" src={phone} alt="Phone" />
            <p className="FooterMain__text">+88 01911 717 490</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMain;
