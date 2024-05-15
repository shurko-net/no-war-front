import React from 'react';
import './ProjectCard.scss';
import { Link } from 'react-router-dom';

function ProjectCard({ src, alt, title, text, statsMoney, statsPercentage, variant }) {
  const cardClassName = `${variant === 'futured-card' ? 'futured-card' : 'futured-right-list'}`;
  return (
    <article className="project-card">
      <Link
        to="/"
        className={`project-card__link ${variant === 'futured-card' ? 'futured-card__link' : 'futured-right__link'}`}>
        <div
          className={`project-card__image ${variant === 'futured-card' ? 'futured-card__image' : 'futured-right__image'}`}>
          <img src={src} alt={alt} />
        </div>
        <section className="project-card__content">
          <h1 className="project-card__title">{title}</h1>
          <p className="project-card__text">{text}</p>
          <section className="project-card__progress">
            <progress max={100} value={73.048} className="project-card__bar" />
            <div className="project-card__stats">
              <span>{statsMoney}</span>
              <span>{statsPercentage}</span>
            </div>
          </section>
          <Link className="project-card__button" to="/">
            Підтримати
          </Link>
        </section>
      </Link>
    </article>
  );
}

export default ProjectCard;
