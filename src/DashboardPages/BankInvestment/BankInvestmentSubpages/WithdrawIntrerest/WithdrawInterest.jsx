import "./WithdrawInterest.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import DashboardForm from "../../../../Dashboard Components/DashboardForm/DashboardForm";

const WithdrawInterest = () => {
  return (
    <div className="withdrawal">
      <div className="withdrawal--header">
        <FontAwesomeIcon icon={faMoneyBillTransfer} />
        <h3>Withdraw Interest</h3>
      </div>

      <form className="withdrawal--form">
        {/*  Source Account & Destination Account --> */}
        <div className="withdrawal--form_flex">
          <div className="withdrawal--form_select">
            <label>Source Account</label>
            <select>
              <option value="Select one">Select one</option>
              <option value="--Put acc No here">--Put acc No here</option>
            </select>
          </div>

          <div className="withdrawal--form_select">
            <label>Destination Account</label>
            <select>
              <option value="Select one">Select one</option>
              <option value="--Put destination account here">
                --Put destination account here
              </option>
            </select>
          </div>
        </div>

        {/* Amount & Description --> */}
        <div className="withdrawal--form_flex">
          <DashboardForm label="Amount" type="number" />

          <DashboardForm
            label="Description"
            type="text"
            placeholder="Enter your description"
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div className="withdrawal--button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default WithdrawInterest;
