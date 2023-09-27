import "./RequestCard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import DashboardForm from "../../../../Dashboard Components/DashboardForm/DashboardForm";

const RequestCard = () => {
  return (
    <div className="request__card">
      <div className="request__card--header">
        <FontAwesomeIcon icon={faCircleInfo} />
        <h3>Billing Info</h3>
      </div>

      <form className="request__card--form">
        {/* First Name & Last Name --> */}
        <div className="request__card--form_flex">
          <DashboardForm
            label="First Name"
            type="text"
            placeholder="Enter your first name"
          />

          <DashboardForm
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
          />
        </div>

        {/* Country & State --> */}
        <div className="request__card--form_flex">
          <DashboardForm
            label="Country"
            type="text"
            placeholder="Enter your country"
          />

          <DashboardForm
            label="State"
            type="text"
            placeholder="Enter your state"
          />
        </div>

        {/* City & Zip Code --> */}
        <div className="request__card--form_flex">
          <DashboardForm
            label="City"
            type="text"
            placeholder="Enter your city"
          />

          <DashboardForm
            label="Zip Code"
            type="text"
            placeholder="Enter your zip code"
          />
        </div>

        {/* Address & Mobile --> */}
        <div className="request__card--form_flex">
          <DashboardForm
            label="Address"
            type="text"
            placeholder="Enter your Address"
          />

          <DashboardForm
            label="Mobile"
            type="tel"
            placeholder="+1(324)-882-0034"
          />
        </div>

        {/*  Choose Account & Request type --> */}
        <div className="request__card--form_flex">
          <div className="request__card--form_select">
            <label>Choose Account</label>
            <select>
              <option value="Select account">Select one</option>
              <option value="--Put acc No here">--Put acc No here</option>
            </select>
          </div>

          <div className="request__card--form_select">
            <label>Request Type</label>
            <select>
              <option value="Select Type">Select Type</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
            </select>
          </div>
        </div>

        {/*  Charges Apply & Card Issuer --> */}
        <div className="request__card--form_flex">
          <div className="request__card--form_select">
            <label>Charges Apply</label>
            <select>
              <option value="Agreement Option">Agreement Option</option>
              <option value="I Agree">I Agree</option>
              <option value="I Decline">I Decline</option>
            </select>
          </div>

          <div className="request__card--form_select">
            <label>Card Issuer</label>
            <select>
              <option value="Select Issuer">Select Issuer</option>
              <option value="American Express">American Express</option>
              <option value="Discover">Discover</option>
              <option value="Visa Card">Visa Card</option>
              <option value="Master Card">Master Card</option>
            </select>
          </div>
        </div>

        {/* <!-- Submit Button --> */}
        <div className="request__card--button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RequestCard;
