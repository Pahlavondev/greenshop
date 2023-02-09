import React from "react";
import "./Footer.scss";
import FooterTop from "./footerTop/FooterTop";
import FooterMain from "./footerMain/FooterMain";
import FooterBottom from "./footerBottom/FooterBottom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <FooterTop />
          <FooterMain />
          <FooterBottom />
        </div>

        <p className="footer__text">© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
