import React from "react";
import "./FooterBottom.scss";
import socialMedia from "../../../assets/social-media.svg";
import facebook from "../../../assets/Facebook.svg";
import instagram from "../../../assets/Instagram.svg";
import twitter from "../../../assets/Twitter.svg";
import linkedin from "../../../assets/Linkedin.svg";
import youTube from "../../../assets/Union.svg";

const FooterBottom = () => {
  return (
    <div className="FooterBottom">
      <div className="FooterBottom__wrapper">
        <ul className="FooterBottom__list">
          <li className="FooterBottom__item">
            <h3 className="FooterBottom__title">My Account</h3>
            <span className="FooterBottom__span">My Account </span>
            <span className="FooterBottom__span">Our stores</span>
            <span className="FooterBottom__span">Contact us</span>
            <span className="FooterBottom__span">Career</span>
            <span className="FooterBottom__span">Specials</span>
          </li>

          <li className="FooterBottom__item">
            <h3 className="FooterBottom__title">Help & Guide</h3>
            <span className="FooterBottom__span">Help Center</span>
            <span className="FooterBottom__span">How to Buy</span>
            <span className="FooterBottom__span">Shipping & Delivery</span>
            <span className="FooterBottom__span">Product Policy</span>
            <span className="FooterBottom__span">How to Return</span>
          </li>

          <li className="FooterBottom__item">
            <h3 className="FooterBottom__title">Categories</h3>
            <span className="FooterBottom__span">House Plants</span>
            <span className="FooterBottom__span">Potter Plants</span>
            <span className="FooterBottom__span">Seeds</span>
            <span className="FooterBottom__span">Small Plants</span>
            <span className="FooterBottom__span">Accessories</span>
          </li>
        </ul>

        <div className="FooterBottom__social">
          <div className="FooterBottom__media">
            <h3 className="FooterBottom__desc">Social Media</h3>
            <ul className="FooterBottom__lists">
              <li className="FooterBottom__items">
                <img
                  className="FooterBottom__images"
                  onClick={() =>
                    window.open("https://ru-ru.facebook.com/", "_blank")
                  }
                  src={facebook}
                  alt="Facebook"
                />
              </li>

              <li className="FooterBottom__items">
                <img
                  className="FooterBottom__images"
                  onClick={() =>
                    window.open("https://www.instagram.com/", "_blank")
                  }
                  src={instagram}
                  alt="Instagram"
                />
              </li>

              <li className="FooterBottom__items">
                <img
                  className="FooterBottom__images"
                  onClick={() => window.open("https://twitter.com/", "_blank")}
                  src={twitter}
                  alt="Twitter"
                />
              </li>

              <li className="FooterBottom__items">
                <img
                  className="FooterBottom__images"
                  onClick={() =>
                    window.open("https://www.linkedin.com/", "_blank")
                  }
                  src={linkedin}
                  alt="Linkedin"
                />
              </li>

              <li className="FooterBottom__items">
                <img
                  className="FooterBottom__images"
                  onClick={() =>
                    window.open("https://www.youtube.com/", "_blank")
                  }
                  src={youTube}
                  alt="You Tube"
                />
              </li>
            </ul>
          </div>

          <div className="FooterBottom__accept">
            <h3 className="FooterBottom__subtitle">We accept</h3>
            <img src={socialMedia} alt="Social Media" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
