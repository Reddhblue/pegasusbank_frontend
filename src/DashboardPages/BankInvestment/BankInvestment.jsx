import "./BankInvestment.scss";

import OverviewStats from "../../Dashboard Components/OverviewStats/OverviewStats";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";

const BankInvestment = () => {
  return (
    <div className="bankinvestment">
      <h2>Investment Portfolio</h2>

      <div className="bankinvestment__status">
        <OverviewStats
          header="YOUR PORTFOLIO BALANCE"
          amount="$ 101,500.00"
          action="WITHDRAW"
          link="/dashboard/investments/withdrawal"
        />
      </div>

      <div className="bankinvestment__action">
        <div className="bankinvestment__action--header">
          <FontAwesomeIcon icon={faLayerGroup} />
          <h3>Select Action</h3>
        </div>

        <div className="bankinvestment__action--selector">
          {/*  NEW DEPOSIT --> */}
          <NavLink
            to="/dashboard/investments/new-deposit"
            className={({ isActive }) =>
              isActive
                ? "active__investment bankinvestment__action--selector_box"
                : "bankinvestment__action--selector_box"
            }
          >
            <h4>New Deposit</h4>
            <p>Discover fresh investment opportunities on our page</p>
          </NavLink>

          {/*  Withdraw Interests --> */}
          <NavLink
            to="/dashboard/investments/withdrawal"
            className={({ isActive }) =>
              isActive
                ? "active__investment bankinvestment__action--selector_box"
                : "bankinvestment__action--selector_box"
            }
          >
            <h4>Withdraw Interests</h4>
            <p>Withdraw Your Investment Earnings with Ease</p>
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default BankInvestment;
