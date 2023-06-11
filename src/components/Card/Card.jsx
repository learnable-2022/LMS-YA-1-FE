import cardStyles from "./Card.module.css";

const Card = ({ style, imageSrc, title, cardText }) => {
  return (
    <div style={style} className={cardStyles["smallCard"]}>
      <div className={cardStyles["card-header"]}>
        <img src={imageSrc} alt={title} className={cardStyles["card-image"]} />
        <h3 className={cardStyles["card-title"]}>{title}</h3>
      </div>

      <div className={cardStyles["card-content"]}>
        <p className={cardStyles["card-text"]}>{cardText}</p>
      </div>
    </div>
  );
};

export default Card;
