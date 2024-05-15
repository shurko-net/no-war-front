import React from 'react';
import './HomeInfoCard.scss';

function HameInfoCard({ number, title, text }) {
  return (
    <div className="card">
      <span className="card__number">{number}</span>
      <h1 className="card__title">{title}</h1>
      <p className="card__text">{text}</p>
    </div>
  );
}
export default HameInfoCard;
