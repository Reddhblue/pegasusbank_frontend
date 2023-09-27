import "./BankCards.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";

const BankCards = () => {
  return (
    <div className="bankcard">
      <h2>Cards</h2>

      <div className="bankcard__action">
        <div className="bankcard__action--header">
          <FontAwesomeIcon icon={faCreditCard} />
          <h3>Select Action</h3>
        </div>

        <div className="bankcard__action--selector">
          {/*  REQUEST CARD --> */}
          <NavLink
            to="/dashboard/cards/request-card"
            className={({ isActive }) =>
              isActive
                ? "active__bankcard bankcard__action--selector_box"
                : "bankcard__action--selector_box"
            }
          >
            <h4>Request Card</h4>
            <p>Request for Credit or debit cards</p>
          </NavLink>

          {/*  View Credit Card --> */}
          <NavLink
            to="/dashboard/cards/credit-card"
            className={({ isActive }) =>
              isActive
                ? "active__bankcard bankcard__action--selector_box"
                : "bankcard__action--selector_box"
            }
          >
            <h4>View Credit Card</h4>
            <p>View and set your credit cards</p>
          </NavLink>

          {/*  View Debit Card --> */}
          <NavLink
            to="/dashboard/cards/debit-card"
            className={({ isActive }) =>
              isActive
                ? "active__bankcard bankcard__action--selector_box"
                : "bankcard__action--selector_box"
            }
          >
            <h4>View Debit Card</h4>
            <p>View and set your debit cards</p>
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default BankCards;
