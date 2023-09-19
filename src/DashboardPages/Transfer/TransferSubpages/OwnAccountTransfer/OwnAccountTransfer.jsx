import "./OwnAccountTransfer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DashboardForm from "../../../../Dashboard Components/DashboardForm/DashboardForm";

const OwnAccountTransfer = () => {
  return (
    <div className="personal__transfer">
      <div className="personal__transfer--header">
        <FontAwesomeIcon icon={faUser} />
        <h3>Personal Account Transfer</h3>
      </div>

      <form className="personal__transfer--form">
        {/*  Source Account & Destination Account --> */}
        <div className="personal__transfer--form_flex">
          <div className="personal__transfer--form_select">
            <label>Source Account</label>
            <select>
              <option value="Select one">Select one</option>
              <option value="--Put acc No here">--Put acc No here</option>
            </select>
          </div>

          <div className="personal__transfer--form_select">
            <label>Destination Account</label>
            <select>
              <option value="Select one">Select one</option>
              <option value="--Put acc No here">--Put acc No here</option>
            </select>
          </div>
        </div>

        {/* Amount & Description --> */}
        <div className="personal__transfer--form_flex">
          <DashboardForm label="Amount" type="number" />

          <DashboardForm
            label="Description"
            type="text"
            placeholder="Enter your description"
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div className="personal__transfer--button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default OwnAccountTransfer;
