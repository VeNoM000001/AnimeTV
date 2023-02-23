import React, { Fragment } from "react";
import "./YourList.scss";
import { useSelector } from "react-redux";

const YourList = () => {
  const listArray = useSelector((state) => state.list.listArray);
  console.log(listArray);
  return (
    <section className="list-section">
      <h1 className="list-header">Your List</h1>
      <div className="yourlist">
        {listArray.map((item, index) => (
          <Fragment key={index}>
            <section>
              <img src={item.animeImage} alt="" />
              <h2>{item.animeName}</h2>
            </section>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default YourList;
