import React from "react";
import StarIcon from "@mui/icons-material/Star";
import styles from "./Carousel.module.css";

const CarouselItem = ({ item, width }) => {
  return (
    <div className={styles["carousel-item"]} style={{ width: width }}>
      <div></div>
      <img className={styles["carousel-img"]} src={item.icon} />
      <div className={styles["carousel-item-text"]}>
        <span className={styles["carousel-icons"]}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </span>
        <div className={styles["carousel-item-description"]}>
          {item.description}
        </div>
        <h3 className={styles["carousel-item-name"]}>{item.name}</h3>
        <p className={styles["carousel-item-title"]}>{item.title}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
