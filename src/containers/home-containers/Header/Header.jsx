/* eslint-disable react/no-unescaped-entities */

import "./Header.scss";

const Hero = () => {
  return (
    <div className="background__header">
      <div className="enclosure header">
        <div className="header__content">
          <h3>YOUR AMBITIONS COME FIRST</h3>
          <h1>WE'RE BOLDLY BACKING BUSINESS</h1>
          <p>
            The world's most innovative finance and technology company. UB is a
            smart hub to manage your entire financial life - fee-free. No
            waiting, no branches, no stress.
          </p>
        </div>
        <div className="header__image">
          <img src="/assets/atlas.png" alt="globe" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
