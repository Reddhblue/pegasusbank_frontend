import "./OverviewStats.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const OverviewStats = (props) => {
  return (
    <div className="overviewstats">
      <h3>{props.header}</h3>
      <p>{props.amount}</p>
      <NavLink to={props.link}>
        {props.action} <FontAwesomeIcon icon={faAngleRight} />
      </NavLink>
    </div>
  );
};

export default OverviewStats;
