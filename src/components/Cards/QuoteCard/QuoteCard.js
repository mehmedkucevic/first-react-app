import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ author, content }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{author}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default QuoteCard;