import React from 'react';
import './CapabilitiesCard.module.scss';

function CapabilitiesCard({ number, title, text, src, alt }) {
  return (
    <article className="capabilities-card">
      <div className="capabilities-card__block-text block-text">
        <div className="block-text__number">
          <span>{number}</span>
        </div>
        <h1 className="block-text__title">{title}</h1>
        <p className="block-text__text">{text}</p>
      </div>
      <div className="capabilities-card__image">
        <img src={src} alt={alt} />
      </div>
    </article>
  );
}

export default CapabilitiesCard;
