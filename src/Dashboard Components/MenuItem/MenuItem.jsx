import "./MenuItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "react-router-dom";

const MenuItem = (props) => {
  // Get the current URL using the useLocation hook
  const location = useLocation();

  // Define a function to check if a given path matches the current URL
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <NavLink
      onClick={props.click}
      to={props.link}
      className={
        isLinkActive(props.link) ? "menu__item--is_active menuitem" : "menuitem"
      }
    >
      <FontAwesomeIcon icon={props.icon} />
      <p>{props.title}</p>
    </NavLink>
  );
};

export default MenuItem;
