/* eslint-disable react/prop-types */
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.source} alt="card-image" />
      <div className="card__content">
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
