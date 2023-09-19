import "./OtherBankTransfer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import DashboardForm from "../../../../Dashboard Components/DashboardForm/DashboardForm";

const OtherBankTransfer = () => {
  return (
    <div className="otherbank__transfer">
      <div className="otherbank__transfer--header">
        <FontAwesomeIcon icon={faBuildingColumns} />
        <h3>Local Wire Transfer</h3>
      </div>

      <form className="otherbank__transfer--form">
        {/*  Source Account & Destination Account --> */}
        <div className="otherbank__transfer--form_flex">
          <div className="otherbank__transfer--form_select">
            <label>Source Account</label>
            <select>
              <option value="Select one">Select one</option>
              <option value="--Put acc No here">--Put acc No here</option>
            </select>
          </div>

          <DashboardForm
            label="Beneficiary Bank"
            type="text"
            placeholder="Eg: WellsFargo"
          />
        </div>

        {/* Destination Account & Receiver Name --> */}
        <div className="otherbank__transfer--form_flex">
          <DashboardForm
            label="Destination Account"
            type="text"
            placeholder="Account Number"
          />

          <DashboardForm
            label="Receiver Name"
            type="text"
            placeholder="Beneficiary Name"
          />
        </div>

        {/* Amount & Description --> */}
        <div className="otherbank__transfer--form_flex">
          <DashboardForm label="Amount" type="number" />

          <DashboardForm
            label="Description"
            type="text"
            placeholder="Enter your description"
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div className="otherbank__transfer--button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default OtherBankTransfer;
