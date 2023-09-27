import "./AccountInfo.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faLink } from "@fortawesome/free-solid-svg-icons";
import DashboardForm from "../../Dashboard Components/DashboardForm/DashboardForm";
import { NavLink } from "react-router-dom";

const AccountInfo = () => {
  return (
    <div className="accountinfo">
      <h2>PROFILE SETTINGS</h2>

      {/* Profile Pic */}
      <div className="accountinfo__profilepic">
        <img
          src="/assets/no-picture-available-icon-20.jpg"
          alt="Profile-Pic"
          className="accountinfo__profilepic--img"
        />
      </div>

      <div className="accountinfo__profiledata">
        <div className="accountinfo__profiledata--header">
          <FontAwesomeIcon icon={faCircleUser} />
          <h3>Profile Information</h3>
        </div>

        <form className="accountinfo__profiledata--form">
          {/*  first Name & Last Name --> */}
          <div className="accountinfo__profiledata--form_flex">
            <DashboardForm
              label="First Name"
              type="text"
              value="John"
              uneditable="readonly"
            />

            <DashboardForm
              label="Last Name"
              type="text"
              value="Doe"
              uneditable="readonly"
            />
          </div>

          {/* Mobile & Email --> */}
          <div className="accountinfo__profiledata--form_flex">
            <DashboardForm
              label="Mobile"
              type="tel"
              value="+1(324)-882-0034"
              uneditable="readonly"
            />

            <DashboardForm
              label="Email"
              type="email"
              value="Example@domain.com"
              uneditable="readonly"
            />
          </div>

          {/*  City & State --> */}
          <div className="accountinfo__profiledata--form_flex">
            <DashboardForm
              label="City"
              type="text"
              value="City"
              uneditable="readonly"
            />

            <DashboardForm
              label="State"
              type="text"
              value="State"
              uneditable="readonly"
            />
          </div>

          {/* Account Type & Banking ID --> */}
          <div className="accountinfo__profiledata--form_flex">
            <DashboardForm
              label="Account Type"
              type="text"
              value="put acc type"
              uneditable="readonly"
            />

            <DashboardForm
              label="Banking ID"
              type="text"
              value="put banking ID"
              uneditable="readonly"
            />
          </div>

          {/* <!-- Submit Button --> */}
          <div className="accountinfo__profiledata--button">
            <NavLink to="/dashboard/update-account-info">
              <button type="submit">
                <FontAwesomeIcon icon={faLink} /> Update Profile
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountInfo;
