/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./Dropdown.scss";

import { NavLink } from "react-router-dom";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <div className="dropdown__header">
        {props.hasItems && <p>{props.name}</p>}
        {!props.hasItems && (
          <p>
            <NavLink to="/contact">{props.name}</NavLink>
          </p>
        )}
        <div className="dropdown__header--info">{props.description}</div>
      </div>
      {props.hasItems && (
        <FontAwesomeIcon icon={faAngleDown} className="dropdown__icon" />
      )}

      {props.hasItems && (
        <div className="dropdown__content">
          {props.items.map((item, index) => (
            <NavLink key={Math.random()} to={props.link[index]}>
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
