import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Main.scss";
import { Link } from "react-router-dom";
import imageBig from "../../assets/flower-big.png";
import imageSmall from "../../assets/flower-small.png";

function Main() {
  let items = [
    {
      name: "Let's Make a Better",
      description: "Probably the most random thing you have ever seen!",
      image: imageBig,
    },

    {
      name: "Let's Make a Better",
      description: "Probably the most random thing you have ever seen!",
      image: imageBig,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <div className="main" id="home">
      <div className="container">
        <div className="main__inner">
          <div className="main__content">
            <span className="main__description">Welcome to GreenShop</span>

            <h1 className="main__title">
              {item.name} <span className="main__span">Planet</span>
            </h1>

            <p className="main__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>

            <Link className="main__link">shop now</Link>
          </div>

          <div className="main__images">
            <img
              className="main__img"
              src={item.image}
              alt="Flower Big Image"
            />

            <img
              className="main__image"
              src={item.image}
              alt="Flower Small Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
