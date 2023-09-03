import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Dropdown from "../Dropdown/Dropdown";
import ModalMenu from "../ModalMenu/ModalMenu";
import "./Navbar.scss";
import { useState } from "react";

import { NavLink } from "react-router-dom";

const navbarData = [
  {
    id: 1,
    name: "COMPANY",
    link: ["/about", "/solutions", "/fraudprevention"],
    description: "UB",
    hasItems: true,
    items: ["Who We Are", "Solutions", "Fraud Prevention"],
  },

  {
    id: 2,
    name: "Accounting",
    link: ["/personalaccount", "/retirementaccount", "/savingsaccount"],
    description: "Services",
    hasItems: true,
    items: ["Personal", "Retirement", "Savings"],
  },

  {
    id: 3,
    name: "PROGRAMS",
    link: ["/forex", "/sma", "/aviation", "/investment"],
    description: "Benefits",
    hasItems: true,
    items: ["Forex Trading", "SMA", "Aviation", "Investments"],
  },

  {
    id: 4,
    name: "HELP",
    link: "contact",
    description: "Contact Us",
    hasItems: false,
  },

  {
    id: 5,
    name: "E-BANKING",
    link: ["/login", "/signup"],
    description: "Account Access",
    hasItems: true,
    items: ["Login", "Register"],
  },
];

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  function clickHandler() {
    setClicked((prevState) => !prevState);
  }

  return (
    <div className="background__nav">
      <div className="enclosure navbar">
        <NavLink to="/">
          <img src="/assets/logo3.png" alt="company-logo" />
        </NavLink>

        <div className="navbar__list">
          {navbarData.map((data) => (
            <Dropdown
              key={data.id}
              id={data.id}
              name={data.name}
              description={data.description}
              hasItems={data.hasItems}
              items={data.items}
              link={data.link}
            />
          ))}
        </div>

        <div className="navbar__burgerMenu">
          <FontAwesomeIcon
            icon={faBars}
            className="navbar__burgerMenu--icon"
            onClick={clickHandler}
          />
          {clicked && (
            <div className="navbar__burgerMenu--item">
              {navbarData.map((data) => (
                <ModalMenu
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  description={data.description}
                  hasItems={data.hasItems}
                  items={data.items}
                  link={data.link}
                />
              ))}
            </div>
          )}
        </div>

        <NavLink to="/signup" className="navbar__button">
          New Here?
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
