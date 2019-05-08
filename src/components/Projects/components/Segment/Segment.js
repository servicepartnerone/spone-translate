import React from 'react';
import { Link } from 'react-router-dom';

import './Segment.scss';

const Segment = ({ language }) => {
  const btnWidth = parseInt((100 / 55) * 55, 10);
  const btnWidth2 = parseInt((100 / 55) * 32, 10);

  return (
    <div className="section-form segment-form">
      <div className="section-form-title">{language.toUpperCase()}</div>

      <div className="section-form-fields segment-list">
        <Link className="segment" to={`/projects/pwi/${language}/login`}>
          <div className="name">
            Login
            <span className="line" style={{ width: `${btnWidth}%` }} />
          </div>

          <div className="keys">55/55</div>
        </Link>

        <Link className="segment" to={`/projects/pwi/${language}/auth`}>
          <div className="name">
            Auth
            <span className="line" style={{ width: `${btnWidth2}%` }} />
          </div>

          <div className="keys">32/55</div>
        </Link>
      </div>
    </div>
  );
};

export default Segment;
