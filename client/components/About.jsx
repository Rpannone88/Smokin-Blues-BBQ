import React from 'react';
import jump from 'jump.js';

export default function About() {
  return (
    <>
    <div className="about">
      <img src="./dist/images/DonDiaPic.png" className="about-me-pic-both"/>
      <div className="about-header">ALL ABOUT BBQ</div>
      <p className="about-subtext">Owner & operator Jarvis Moore has had a passion for cutting hair since he was 13 years old. After attending college as a collegiate athlete in Arizona and working for several barbershops throughout the state of Florida, Jarvis struck out on his own.

      Moore than fades will provide exceptional service, out going enthusiastic barbers and an inviting atmosphere. Our main focus is customer service and satisfaction. We strive to personalize each service to fit individual needs.
      </p>
    </div>
    <div className="see-menu"
      onClick={() => {jump('.whole-menu-title')}}
      >Check the menu</div>
    </>
  )
}
