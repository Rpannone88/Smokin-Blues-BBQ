import React from 'react';
import jump from 'jump.js';

export default function Landing() {
  return (
  <div className="whole-landing">
      <div>
        <img
          className="logo"
          src="./dist/images/smokin-blues-logo-trimmy.png"
        />
      </div>
      <div className="landing-text-header">
        <strong>
        BBQ done right
          </strong>
      </div>
      <div className="landing-text-sub">Serving the Greater Rochester area.
      </div>
      <div className="see-more"
        onClick={() => {jump('.about')}}
        >See More
      </div>
  </div>
  )
}
