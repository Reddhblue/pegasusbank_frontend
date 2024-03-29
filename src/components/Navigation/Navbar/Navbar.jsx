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
    description: "Pegasus Savings",
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
    link: ["/contact"],
    description: "Contact Us",
    hasItems: true,
    items: ["Contact Us"],
  },

  {
    id: 5,
    name: "E-BANKING",
    link: [
      "https://pegasusavings.com/bank/account/index",
      "https://pegasusavings.com/bank/account/auth/register?tc=1",
    ],
    description: "Account Access",
    hasItems: true,
    items: ["Login", "Register"],
  },
];

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  function clickHandler() {
    setClicked((prevState) => !prevState);
  }

  const handleAccordionClick = (index) => {
    if (index === openAccordionIndex) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  return (
    <div className="background__nav">
      <div className="enclosure navbar">
        <NavLink to="/dashboard">
          <img
            src="/assets/pegasuslogo.png"
            alt="company-logo"
            className="nav__img"
          />
        </NavLink>

        <div className="navbar__list">
          {navbarData.map((data) => (
            <Dropdown
              key={data.id}
              id={data.id}
              name={data.name}
              description={data.description}
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
              {navbarData.map((data, index) => (
                <ModalMenu
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  items={data.items}
                  link={data.link}
                  isOpen={index === openAccordionIndex}
                  onClick={() => handleAccordionClick(index)}
                />
              ))}
            </div>
          )}
        </div>

        <a
          href="https://pegasusavings.com/bank/account/auth/register?tc=1"
          className="navbar__button"
        >
          New Here?
        </a>
      </div>
    </div>
  );
};

export default Navbar;
