import "./NewDeposit.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import DashboardForm from "../../../../Dashboard Components/DashboardForm/DashboardForm";

const NewDeposit = () => {
  return (
    <div className="deposit">
      <div className="deposit--header">
        <FontAwesomeIcon icon={faMoneyBills} />
        <h3>New Deposit</h3>
      </div>

      <form className="deposit--form">
        {/*  Source Account & Destination Account --> */}
        <div className="deposit--form_flex">
          <div className="deposit--form_select">
            <label>Source Account</label>
            <select>
              <option value="Select one">Select one</option>
              <option value="--Put acc No here">--Put acc No here</option>
            </select>
          </div>

          <div className="deposit--form_select">
            <label>Destination Account</label>
            <select>
              <option value="Select one">Select one</option>
              <option value="--Put investment type here">
                --Put investment type here
              </option>
            </select>
          </div>
        </div>

        {/* Amount & Description --> */}
        <div className="deposit--form_flex">
          <DashboardForm label="Amount" type="number" />

          <DashboardForm
            label="Description"
            type="text"
            placeholder="Enter your description"
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div className="deposit--button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewDeposit;
