import React from "react";
import "./PlantsList.scss";

const PlantsList = ({ data, shopBtn, newHandleChange }) => {
  return (
    <div className="plants">
      <ul className="plants__list">
        <li className="plants__item">
          <img className="plants__image" src={data.img} alt="Flower" />
          <button className="plants__button" onClick={newHandleChange}>
            {shopBtn}
          </button>
          <p className="plants__description">{data.desc}</p>
          <span className="plants__price">{data.price}</span>
        </li>
      </ul>
    </div>
  );
};

export default PlantsList;
