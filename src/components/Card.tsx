import React from "react";

interface CardProps {
  imagePath: string;
}

const Card: React.FC<CardProps> = ({ imagePath }) => {
  return (
    <div className="card">
      <img
        src={require("../img/cardImages/" + imagePath)}
        alt="Card Design"
        className="card__image"
      />
    </div>
  );
};

export default Card;
