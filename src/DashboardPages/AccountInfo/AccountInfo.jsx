import "./AccountInfo.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faLink } from "@fortawesome/free-solid-svg-icons";
import DashboardForm from "../../Dashboard Components/DashboardForm/DashboardForm";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserDetailsContext";
import { useContext } from "react";

const AccountInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="accountinfo">
      <h2>PROFILE SETTINGS</h2>

      {/* Profile Pic */}
      <div className="accountinfo__profilepic">
        <img
          src={user?.profile_img ?? "/assets/no-picture-available-icon-20.jpg"}
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
              value={user?.firstname}
              disabled
              name="firstname"
            />

            <DashboardForm
              label="Last Name"
              type="text"
              value={user?.lastname}
              disabled
              name="lastname"
            />
          </div>

          {/* Mobile & Email --> */}
          <div className="accountinfo__profiledata--form_flex">
            <DashboardForm
              label="Mobile"
              type="tel"
              value={user?.phone}
              disabled
              name="phone"
            />

            <DashboardForm
              label="Email"
              type="email"
              name="email"
              value={user?.email}
              disabled
            />
          </div>

          {/*  City & State --> */}
          <div className="accountinfo__profiledata--form_flex">
            <DashboardForm
              label="City"
              type="text"
              name="city"
              value={user?.city}
              disabled
            />

            <DashboardForm
              label="State"
              type="text"
              name="state"
              value={user?.state}
              disabled
            />
          </div>

          {/* Account Type & Banking ID --> */}
          <div className="accountinfo__profiledata--form_flex">
            <DashboardForm
              label="Account Type"
              type="text"
              name="account_type"
              value={user?.account_type}
              disabled
            />

            <DashboardForm
              label="Banking ID"
              type="text"
              value={user?.account_number}
              disabled
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
