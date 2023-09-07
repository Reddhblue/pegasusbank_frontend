import "./NavAccordion.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NavAccordion = ({ name, items, isOpen, onClick, link }) => {
  return (
    <div className={`navaccordion ${isOpen ? "open" : ""}`}>
      <div className="navaccordion-header" onClick={onClick}>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={`icon ${isOpen ? "open" : ""}`}
        />
        <p className="navaccordion-title">{name}</p>
      </div>

      {isOpen &&
        link.map((link, index) => (
          <NavLink
            to={link}
            key={Math.random()}
            className="navaccordion-content"
          >
            {items[index]}
          </NavLink>
        ))}
    </div>
  );
};

export default NavAccordion;
