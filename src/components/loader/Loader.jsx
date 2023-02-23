import React from "react";
import "./Loader.scss";
import Sharingan from "../../assets/sharingan.jpeg";
const Loader = () => {
  return (
    <section className="loader-section">
      <div>
        <img className="rotation" src={Sharingan} alt="" />
      </div>
    </section>
  );
};

export default Loader;
