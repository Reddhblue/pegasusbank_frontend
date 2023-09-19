import "./AccountInfo.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import DashboardForm from "../../Dashboard Components/DashboardForm/DashboardForm";

const AccountInfo = () => {
  return (
    <div className="accountinfo">
      <h2>PROFILE SETTINGS</h2>

      {/* <div className="accountinfo__profilpic"></div> */}

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
              placeholder="First Name"
            />

            <DashboardForm
              label="Last Name"
              type="text"
              placeholder="Last Name"
            />
          </div>

          {/* Phone number & Email --> */}
          <div className="accountinfo__profiledata--form_flex">
            <DashboardForm
              label="Mobile"
              type="tel"
              placeholder="+1(324)-882-0034"
            />

            <DashboardForm
              label="Email"
              type="email"
              placeholder="Example@domain.com"
            />
          </div>

          {/*  City & State --> */}
          <div className="accountinfo__profiledata--form_flex">
            <DashboardForm label="City" type="text" placeholder="City" />

            <DashboardForm label="State" type="text" placeholder="State" />
          </div>

          {/*  Street Address & Country --> */}
          <div className="accountinfo__profiledata--form_flex">
            <DashboardForm
              label="Street Address"
              type="text"
              placeholder="Address"
            />

            <DashboardForm
              label="Country"
              type="text"
              value="Selected Country"
              uneditable="readonly"
            />
          </div>

          {/* <!-- Submit Button --> */}
          <div className="accountinfo__profiledata--button">
            <button type="submit">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountInfo;
