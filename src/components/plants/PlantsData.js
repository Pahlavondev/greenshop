import React from "react";
import PlantsList from "./plantsList/PlantsList";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./PlantsData.scss";
import { Pagination } from "antd";
import banner from "../../assets/Super Sale Banner.png";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

const arr = [
  {
    id: 1,
    img: image1,
    desc: "Barberton Daisy",
    price: "$119.00",
  },

  {
    id: 2,
    img: image2,
    desc: "Angel Wing Begonia",
    price: "$169.00",
  },

  {
    id: 3,
    img: image3,
    desc: "African Violet",
    price: "$199.00",
  },

  {
    id: 4,
    img: image4,
    desc: "Beach Spider Lily",
    price: "$129.00",
  },

  {
    id: 5,
    img: image5,
    desc: "Blushing Bromeliad",
    price: "$139.00",
  },

  {
    id: 6,
    img: image6,
    desc: "Aluminum Plant",
    price: "$179.00",
  },

  {
    id: 7,
    img: image7,
    desc: "Bird's Nest Fern",
    price: "$99.00",
  },

  {
    id: 8,
    img: image8,
    desc: "Broadleaf Lady Palm",
    price: "$59.00",
  },

  {
    id: 9,
    img: image9,
    desc: "Chinese Evergreen",
    price: "$39.00",
  },
];

const PlantsData = ({ handlerClick }) => {
  const newHandle = handlerClick;
  return (
    <div className="plantsData">
      <div className="container">
        <div className="plantsData__wrapper--categories">
          <div className="plantsData__superSale">
            <div className="plantsData__categories">
              <h3 className="plantsData__categoriesTitle">Categories</h3>
              <ul className="plantsData__categoriesList">
                <li className="plantsData__categoriesItem">
                  <div className="plantsData__categoriesWrapper plantsData__categoriesWrapper--active">
                    <p className="plantsData__categoriestext">House Plants</p>
                    <span className="plantsData__categoriesspan">(33)</span>
                  </div>
                </li>

                <li className="plantsData__categoriesItem">
                  <div className="plantsData__categoriesWrapper">
                    <p className="plantsData__categoriestext">Potter Plants</p>
                    <span className="plantsData__categoriesspan">(12)</span>
                  </div>
                </li>

                <li className="plantsData__categoriesItem">
                  <div className="plantsData__categoriesWrapper">
                    <p className="plantsData__categoriestext">Seeds</p>
                    <span className="plantsData__categoriesspan">(65)</span>
                  </div>
                </li>

                <li className="plantsData__categoriesItem">
                  <div className="plantsData__categoriesWrapper">
                    <p className="plantsData__categoriestext">Small Plants</p>
                    <span className="plantsData__categoriesspan">(39)</span>
                  </div>
                </li>

                <li className="plantsData__categoriesItem">
                  <div className="plantsData__categoriesWrapper">
                    <p className="plantsData__categoriestext">Big Plants</p>
                    <span className="plantsData__categoriesspan">(23)</span>
                  </div>
                </li>

                <li className="plantsData__categoriesItem">
                  <div className="plantsData__categoriesWrapper">
                    <p className="plantsData__categoriestext">Succulents</p>
                    <span className="plantsData__categoriesspan">(17)</span>
                  </div>
                </li>

                <li className="plantsData__categoriesItem">
                  <div className="plantsData__categoriesWrapper">
                    <p className="plantsData__categoriestext">Trerrariums</p>
                    <span className="plantsData__categoriesspan">(19)</span>
                  </div>
                </li>

                <li className="plantsData__categoriesItem">
                  <div className="plantsData__categoriesWrapper">
                    <p className="plantsData__categoriestext">Gardeing</p>
                    <span className="plantsData__categoriesspan">(13)</span>
                  </div>
                </li>

                <li className="plantsData__categoriesItem">
                  <div className="plantsData__categoriesWrapper">
                    <p className="plantsData__categoriestext">Accessories</p>
                    <span className="plantsData__categoriesspan">(18)</span>
                  </div>
                </li>
              </ul>

              <h3 className="plantsData__categoriesText">Price Range</h3>
              <form
                className="plantsData__categoriesContent"
                onInput="result.value = slider.value"
              >
                <input
                  className="plantsData__categoriesInput"
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                  value="30"
                />
                <label className="plantsData__categoriesLabel">
                  Price:{" "}
                  <span className="plantsData__categoriesSpan">
                    $39 - $1230
                  </span>
                  <br />
                  <button className="plantsData__categoriesButton">
                    Filter
                  </button>
                </label>
              </form>

              <h3 className="plantsData__categoriesTitle">Size</h3>
              <ul className="plantsData__categoriesList">
                <li className="plantsData__categoriesItem">
                  <div className="plantsData__categoriesWrapper plantsData__categoriesWrapper--active">
                    <p className="plantsData__categoriestext">Small</p>
                    <span className="plantsData__categoriesspan">(116)</span>
                  </div>
                </li>

                <li className="plantsData__categoriesItem">
                  <div className="plantsData__categoriesWrapper">
                    <p className="plantsData__categoriestext">Medium</p>
                    <span className="plantsData__categoriesspan">(86)</span>
                  </div>
                </li>

                <li className="plantsData__categoriesItem">
                  <div className="plantsData__categoriesWrapper">
                    <p className="plantsData__categoriestext">Large</p>
                    <span className="plantsData__categoriesspan">(78)</span>
                  </div>
                </li>
              </ul>
            </div>

            <img className="plantsData__image" src={banner} alt="" />
          </div>

          <div className="plantsData__content">
            <div className="plantsData__texts">
              <ul className="plantsData__list">
                <li className="plantsData__item">
                  <p className="plantsData__text plantsData__text--active">
                    All Plants
                  </p>
                </li>

                <li className="plantsData__item">
                  <p className="plantsData__text">New Arrivals</p>
                </li>

                <li className="plantsData__item">
                  <p className="plantsData__text">Sale</p>
                </li>
              </ul>

              <form className="plantsData__form">
                <label className="plantsData__label">Short by:</label>

                <select className="plantsData__select">
                  <option value="default sort">
                    Default sorting <KeyboardArrowDownIcon />
                  </option>

                  <option value="money">Sort by money</option>
                  <option value="time">Sort by time</option>
                </select>
              </form>
            </div>

            <div className="plantsData__wrapper">
              {arr.map((item) => (
                <PlantsList
                  data={item}
                  key={item.id}
                  shopBtn={<LocalGroceryStoreIcon />}
                  newHandleChange={newHandle}
                />
              ))}
            </div>

            <div className="plantsData__pagination">
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsData;
