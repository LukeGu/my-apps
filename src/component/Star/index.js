import React from "react";
import "./index.css";
import GoldStar from "../../assets/single-star-gold.svg";
import GreyStar from "../../assets/single-star-grey.svg";

const Star = props => {
  let num = parseInt(props.star);
  let starBody = [];
  let starNum = props.star === 0 ? "No review" : props.star.toFixed(1);
  for (let i = 0; i < num; i++) {
    starBody.push(
      <img className="my-star" key={i} src={GoldStar} alt="star" />
    );
  }
  for (let i = 0; i < 5 - num; i++) {
    starBody.push(
      <img className="my-star" key={i - 5} src={GreyStar} alt="star" />
    );
  }

  return (
    <div className="my-row">
      <div className="five-stars">{starBody}</div>
      <p className="rates">{starNum}</p>
    </div>
  );
};

export default Star;
