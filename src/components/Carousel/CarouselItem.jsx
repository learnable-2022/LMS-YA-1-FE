import React from "react";
import StarIcon from "@mui/icons-material/Star";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <img className="carousel-img" src={item.icon} />
      <div className="carousel-item-text">
        <span className="carousel-icons">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </span>
        <div>{item.description}</div>
        <h3 className="carousel-item-name">{item.name}</h3>
        <p className="carousel-item-title">{item.title}</p>
      </div>
    </div>
  );
};
