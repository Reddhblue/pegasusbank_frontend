import "./Transfer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";

const Transfer = () => {
  return (
    <div className="transfer">
      <h2>SEND FUNDS</h2>

      <div className="transfer__type">
        <div className="transfer__type--header">
          <FontAwesomeIcon icon={faPaperPlane} />
          <h3>Select Transfer Type</h3>
        </div>

        <div className="transfer__type--selector">
          {/*  OWN ACCOUNT TRANSFER --> */}
          <NavLink
            to="/dashboard/transfer/own-account"
            className={({ isActive }) =>
              isActive
                ? "active__transfer transfer__type--selector_box"
                : "transfer__type--selector_box"
            }
          >
            <h4>Own Account</h4>
            <p>Fund your other accounts with us</p>
          </NavLink>

          {/*  INTRA BANK TRANSFER --> */}
          <NavLink
            to="/dashboard/transfer/same-bank"
            className="transfer__type--selector_box"
          >
            <h4>Uni Bank</h4>
            <p>Send to Uni Bank account number</p>
          </NavLink>

          {/*  INTER BANK TRANSFER --> */}
          <NavLink
            to="/dashboard/transfer/other-bank"
            className="transfer__type--selector_box"
          >
            <h4>Other Banks</h4>
            <p>Send to non Uni Bank account number</p>
          </NavLink>

          {/*  FOREIGN TRANSFER --> */}
          <NavLink
            to="/dashboard/transfer/foreign"
            className="transfer__type--selector_box"
          >
            <h4>Foreign Transfer</h4>
            <p>Send to international bank account</p>
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Transfer;

{
  /* className="transfer__type--selector_box" */
}
