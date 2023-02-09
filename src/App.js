import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import "./assets/style/global.scss";
import Main from "./components/main/Main";
import PlantsData from "./components/plants/PlantsData";
import Flowers from "./components/flowers/Flowers";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  const handlerClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Header count={count} />} />
        <Route path="/shop" element={<Header count={count} />} />
        <Route path="/plant-care" element={<Header count={count} />} />
        <Route path="/blogs" element={<Header count={count} />} />
      </Routes>
      <Main />
      <PlantsData handlerClick={handlerClick} />
      <Flowers />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
