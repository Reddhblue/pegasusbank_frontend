import "./TransferToSameBank.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import DashboardForm from "../../../../Dashboard Components/DashboardForm/DashboardForm";

const TransferToSameBank = () => {
  return (
    <div className="domestic__transfer">
      <div className="domestic__transfer--header">
        <FontAwesomeIcon icon={faBuildingColumns} />
        <h3>Domestic Transfer</h3>
      </div>

      <form className="domestic__transfer--form">
        {/*  Source Account & Destination Account --> */}
        <div className="domestic__transfer--form_flex">
          <div className="domestic__transfer--form_select">
            <label>Source Account</label>
            <select>
              <option value="Select one">Select one</option>
              <option value="--Put acc No here">--Put acc No here</option>
            </select>
          </div>

          <DashboardForm
            label="Destination Account"
            type="text"
            value="--Bank Name goes here"
            uneditable="readonly"
          />
        </div>

        {/* Amount & Description --> */}
        <div className="domestic__transfer--form_flex">
          <DashboardForm label="Amount" type="number" />

          <DashboardForm
            label="Description"
            type="text"
            placeholder="Enter your description"
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div className="domestic__transfer--button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TransferToSameBank;
