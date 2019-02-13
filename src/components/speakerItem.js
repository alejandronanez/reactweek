import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';
import './../styles/speakerItem.scss';

// Speakears item component

const SpeakerItem = ({
  pic,
  name,
  description,
  github,
  facebook,
  twitter,
  linkedin,
}) => {
  return (
    <article className="speakers-grid__item">
      <figure className="speakers-grid__figure">
        <img
          className="speakers-grid__img"
          src={withPrefix(`speakers/${pic}`)}
          alt="Foto del speaker"
        />
        <figcaption className="speakers-grid__name">{name}</figcaption>
      </figure>
      <div className="speakers-grid__description">
        <p className="speakers-grid__text">{description}</p>
        <div className="speakers-grid__social">
          {!!github && (
            <a
              href={github}
              className="speakers-grid__link speakers-grid__link--github"
            >
              Github
            </a>
          )}
          {!!facebook && (
            <a
              href={facebook}
              className="speakers-grid__link speakers-grid__link--facebook"
            >
              Facebook
            </a>
          )}
          {!!twitter && (
            <a
              href={twitter}
              className="speakers-grid__link speakers-grid__link--twitter"
            >
              Twitter
            </a>
          )}
          {!!linkedin && (
            <a
              href={linkedin}
              className="speakers-grid__link speakers-grid__link--linkedin"
            >
              linkedin
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

SpeakerItem.propTypes = {
  pic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
};

export default SpeakerItem;
