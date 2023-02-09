import React from "react";
import blog1 from "../../../assets/blog1.png";
import blog2 from "../../../assets/blog2.png";
import blog3 from "../../../assets/blog3.png";
import blog4 from "../../../assets/blog4.png";
import "./BlogsCactus.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import MyModal from "./MyModal";

const BlogsCactus = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="blogsCactus">
      <div className="container">
        <ul className="blogsCactus__list">
          <li className="blogsCactus__item">
            <img className="blogsCactus__image" src={blog1} alt="Cactus" />

            <div className="blogsCactus__wrapper">
              <span className="blogsCactus__span">
                September 12 I Read in 6 minutes
              </span>

              <h3 className="blogsCactus__title">
                Cactus & Succulent Care Tips
              </h3>

              <p className="blogsCactus__text">
                Cacti are succulents are easy care plants for any home or patio.
              </p>

              <Link
                className="blogsCactus__link"
                onClick={() => setModalShow(true)}
              >
                Read More <ArrowRightAltIcon />
              </Link>

              <MyModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </li>

          <li className="blogsCactus__item">
            <img
              className="blogsCactus__image"
              src={blog2}
              alt="Flower succulents"
            />

            <div className="blogsCactus__wrapper">
              <span className="blogsCactus__span">
                September 13 I Read in 2 minutes
              </span>

              <h3 className="blogsCactus__title">
                Top 10 Succulents for Your Home
              </h3>

              <p className="blogsCactus__text">
                Best in hanging baskets. Prefers medium to high light.
              </p>

              <Link
                className="blogsCactus__link"
                onClick={() => setModalShow(true)}
              >
                Read More <ArrowRightAltIcon />
              </Link>

              <MyModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </li>

          <li className="blogsCactus__item">
            <img
              className="blogsCactus__image"
              src={blog3}
              alt="Cacti & succulents"
            />

            <div className="blogsCactus__wrapper">
              <span className="blogsCactus__span">
                September 15 I Read in 3 minutes
              </span>

              <h3 className="blogsCactus__title">
                Cacti & Succulent Care Tips
              </h3>

              <p className="blogsCactus__text">
                Cacti and succulents thrive in containers and because most are..
              </p>

              <Link
                className="blogsCactus__link"
                onClick={() => setModalShow(true)}
              >
                Read More <ArrowRightAltIcon />
              </Link>

              <MyModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </li>

          <li className="blogsCactus__item">
            <img
              className="blogsCactus__image"
              src={blog4}
              alt="Cacti & succulents"
            />

            <div className="blogsCactus__wrapper">
              <span className="blogsCactus__span">
                September 15 I Read in 2 minutes
              </span>

              <h3 className="blogsCactus__title">
                Best Houseplants Room by Room
              </h3>

              <p className="blogsCactus__text">
                The benefits of houseplants are endless. In addition to..
              </p>

              <Link
                className="blogsCactus__link"
                onClick={() => setModalShow(true)}
              >
                Read More <ArrowRightAltIcon />
              </Link>

              <MyModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogsCactus;
