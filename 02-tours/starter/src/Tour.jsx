import { useState } from "react";
import React from "react";

const Tour = ({ id, name, image, price, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} className="img" />
        <span className="tour-price">${price}</span>
        <div className="tour-info">
          <h5>{name}</h5>
          <p>
            {" "}
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              type="button"
              className="info-btn"
              onClick={() => setReadMore(!readMore)}
            >
              {" "}
              {readMore ? "show less" : "show more"}
            </button>
          </p>
          <button type="button" className="btn " onClick={() => removeTour(id)}>
            remove tour
          </button>
        </div>
      </article>
    </>
  );
};

export default Tour;
