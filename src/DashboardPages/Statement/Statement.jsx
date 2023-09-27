import "./Statement.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import DashboardForm from "../../Dashboard Components/DashboardForm/DashboardForm";

const Statement = () => {
  return (
    <div className="statement">
      <h2>Statement</h2>

      <div className="statement__table">
        <div className="statement__table--header">
          <FontAwesomeIcon icon={faFileLines} />
          <h3>Get Statement</h3>
        </div>

        <form className="statement__table--form">
          {/*  Request Type & Source Account --> */}
          <div className="statement__table--form_flex">
            <div className="statement__table--form_select">
              <label>Request Type</label>
              <select>
                <option value="Select one">Select Type</option>
                <option value="Electronic Statement">
                  Electronic Statement
                </option>
                <option value="Paper Statement">Paper Statement</option>
              </select>
            </div>

            <div className="statement__table--form_select">
              <label>Source Account</label>
              <select>
                <option value="Select one">Select one</option>
                <option value="--Put source account here">
                  --Put source account here
                </option>
              </select>
            </div>
          </div>

          {/* Start Date & End DAte --> */}
          <div className="statement__table--form_flex">
            <DashboardForm label="Start Date" type="date" />

            <DashboardForm label="End Date" type="date" />
          </div>

          {/* <!-- Submit Button --> */}
          <div className="statement__table--button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Statement;
