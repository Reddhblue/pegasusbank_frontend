import "./UpdateAccountInfo.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import DashboardForm from "../../Dashboard Components/DashboardForm/DashboardForm";

const UpdateAccountInfo = () => {
  return (
    <div className="updateaccountinfo">
      <NavLink to="/dashboard/account-info">
        <FontAwesomeIcon icon={faAngleLeft} /> Back
      </NavLink>

      <div className="updateaccountinfo__profiledata">
        <div className="updateaccountinfo__profiledata--header">
          <FontAwesomeIcon icon={faPenToSquare} />
          <h3>Update Account Info</h3>
        </div>

        <form className="updateaccountinfo__profiledata--form">
          {/*  UserName & Email --> */}
          <div className="updateaccountinfo__profiledata--form_flex">
            <DashboardForm label="UserName" type="text" placeholder="John" />

            <DashboardForm
              label="Email"
              type="email"
              placeholder="Example@domain.com"
            />
          </div>

          {/* Mobile & Password --> */}
          <div className="updateaccountinfo__profiledata--form_flex">
            <DashboardForm
              label="Mobile"
              type="tel"
              placeholder="+1(324)-882-0034"
            />

            <DashboardForm
              label="Password"
              type="password"
              placeholder="Enter Password"
            />
          </div>

          {/* <!-- Submit Button --> */}
          <div className="updateaccountinfo__profiledata--button">
            <NavLink to="#">
              <button type="submit"> Update</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAccountInfo;
