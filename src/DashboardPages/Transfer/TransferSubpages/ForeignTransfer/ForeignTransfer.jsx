import "./ForeignTransfer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import DashboardForm from "../../../../Dashboard Components/DashboardForm/DashboardForm";

const ForeignTransfer = () => {
  return (
    <div className="foreign__transfer">
      <div className="foreign__transfer--header">
        <FontAwesomeIcon icon={faEarthEurope} />
        <h3>International Wire Transfer</h3>
      </div>

      <form className="foreign__transfer--form">
        {/*  Source Account & Beneficiary Bank --> */}
        <div className="foreign__transfer--form_flex">
          <div className="foreign__transfer--form_select">
            <label>Source Account</label>
            <select>
              <option value="Select one">Select one</option>
              <option value="--Put acc No here">--Put acc No here</option>
            </select>
          </div>

          <DashboardForm
            label="Beneficiary Bank"
            type="text"
            placeholder="Eg: Wells Fargo"
          />
        </div>

        {/* Destination Account & Receiver Name --> */}
        <div className="foreign__transfer--form_flex">
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

        {/* SWIFT/BIC & Country --> */}
        <div className="foreign__transfer--form_flex">
          <DashboardForm
            label="SWIFT/BIC"
            type="text"
            placeholder="SWIFT/BIC"
          />

          <DashboardForm
            label="Country"
            type="text"
            placeholder="Enter Country"
          />
        </div>

        {/* Bank City & Bank Branch --> */}
        <div className="foreign__transfer--form_flex">
          <DashboardForm
            label="Bank City"
            type="text"
            placeholder="Enter City"
          />

          <DashboardForm
            label="Bank Branch"
            type="text"
            placeholder="Bank Address"
          />
        </div>

        {/* Amount & Description --> */}
        <div className="foreign__transfer--form_flex">
          <DashboardForm label="Amount" type="number" />

          <DashboardForm
            label="Description"
            type="text"
            placeholder="Enter your description"
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div className="foreign__transfer--button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ForeignTransfer;
