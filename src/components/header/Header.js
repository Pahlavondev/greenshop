import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LogoutIcon from "@mui/icons-material/Logout";

import logo from "../../assets/logo.svg";
const Header = ({ count }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to="/">
            <img className="header__image" src={logo} alt="GreenShop" />
          </Link>

          <ul className="header__list">
            <li className="header__item">
              <Link className="header__link header__link--active" to="/home">
                Home
              </Link>
            </li>

            <li className="header__item">
              <Link className="header__link" to="/shop">
                Shop
              </Link>
            </li>

            <li className="header__item">
              <Link className="header__link" to="/plant-care">
                Plant Care
              </Link>
            </li>

            <li className="header__item">
              <Link className="header__link" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>

          <div className="header__content">
            <button className="header__search">
              <SearchIcon />
            </button>

            <button className="header__shop">
              <LocalGroceryStoreIcon /> {count}
            </button>

            <Link className="header__login">
              <LogoutIcon /> Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
