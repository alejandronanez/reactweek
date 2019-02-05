import React from 'react';
import { withPrefix } from 'gatsby';

const ScheduledEvent = ({
  image,
  schedule,
  title,
  description,
  slides,
  video,
  repository
}) => (
  <div className="event-card">
    <div className="event-card__wrapper">
      <img className="event-card__image" src={withPrefix(`speakers/${image}`)} alt="avatar" />
      <div className="event-card__information">
        <h2 className="event-card__title">{title}</h2>

        <i className="event-card__schedule">{schedule}</i>
        <p className="event-card__description">{description}</p>
        {slides && (
          <a className="event-card__link" href={slides}>
            Slides
          </a>
        )}
        {video && (
          <a className="event-card__link" href={video}>
            Video
          </a>
        )}
        {repository && (
          <a className="event-card__link" href={repository}>
            Repo
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ScheduledEvent;
