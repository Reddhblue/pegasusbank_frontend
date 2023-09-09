import "./SignUp.scss";

import { NavLink } from "react-router-dom";
import FormInputWithLabel from "../../components/FormInputWithLabel/FormInputWithLabel";
import CountrySelector from "../../components/CountrySelector/CountrySelector";
import { useState } from "react";

const SignUp = () => {
  const [citizenInfo, setCitizenInfo] = useState("Yes");

  const citizenInfoHandler = (e) => {
    setCitizenInfo(e.target.value);
  };

  return (
    <div className="signup">
      <NavLink to="/" className="logo">
        <img src="/assets/logo1.png" alt="logo" />
      </NavLink>

      <form action="" className="signup__form">
        <h2>Onboarding</h2>

        {/* <!-- Passport --> */}
        <div>
          <div>
            <label>Are You A USA Citizen?</label>
            <select className="select" onChange={citizenInfoHandler}>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/*  first Name & Last Name --> */}
        <div className="flex-container ">
          <div>
            <FormInputWithLabel
              label="First Name"
              type="text"
              placeholder="First Name"
            />
          </div>

          <div>
            <FormInputWithLabel
              label="Last Name"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* <!-- Date of birth and Social security number --> */}
        <div className="flex-container">
          <div>
            <FormInputWithLabel label="Date of Birth" type="date" />
          </div>

          {/* Conditionally render Social security number or Tax ID */}
          {citizenInfo === "Yes" ? (
            <div>
              <FormInputWithLabel
                label="Social Security No"
                type="text"
                placeholder="SSN-XXX-XX-XXXX"
              />
            </div>
          ) : (
            <div>
              <FormInputWithLabel
                label="Tax ID (optional)"
                type="text"
                placeholder="Tax ID"
              />
            </div>
          )}
        </div>

        {/* <!-- Email & Mobile --> */}
        <div className="flex-container">
          <div>
            <FormInputWithLabel
              label="Email"
              type="email"
              placeholder="Example@domain.com"
            />
          </div>

          <div>
            <FormInputWithLabel
              label="Mobile"
              type="tel"
              placeholder="+1(324)-882-0034"
            />
          </div>
        </div>

        {/* <!-- Country & State --> */}
        <div className="flex-container">
          {/* COUNRTY SELECTOR */}
          <CountrySelector />

          <div>
            <FormInputWithLabel label="State" type="text" placeholder="State" />
          </div>
        </div>

        {/* <!-- City & Street Address --> */}
        <div className="flex-container">
          <div>
            <FormInputWithLabel label="City" type="text" placeholder="City" />
          </div>

          <div>
            <FormInputWithLabel
              label="Street Address"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>

        {/* <!-- Verification & ID --> */}
        <div className="flex-container">
          <div>
            <label>Verification</label>
            <select className="select">
              <option>Valid ID Type</option>
              <option>Driver's Licence</option>
              <option>International Passport</option>
              <option>National ID</option>
            </select>
          </div>

          <div>
            <FormInputWithLabel
              label="ID Number"
              type="text"
              placeholder="ID Number"
            />
          </div>
        </div>

        {/* <!-- Date Issued & Expiry Date --> */}
        <div className="flex-container">
          <div>
            <FormInputWithLabel label="Date Issued" type="date" />
          </div>

          <div>
            <FormInputWithLabel label="Expiry Date" type="date" />
          </div>
        </div>

        {/* <!-- Gender & Source Of Income --> */}
        <div className="flex-container">
          <div>
            <label>Gender</label>
            <select className="select">
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>

          <div>
            <label>Source Of Income</label>
            <select className="select">
              <option>Select Income Source</option>
              <option>Employment Income</option>
              <option>Inheritance</option>
              <option>Life Insurance</option>
              <option>Sale of Company</option>
              <option>Sale of Investments</option>
              <option>Sale of property</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* <!-- Account Type & Currency --> */}
        <div className="flex-container">
          <div>
            <label>Account Type</label>
            <select className="select">
              <option>Account Type</option>
              <option>Checking Account</option>
              <option>Savings Account</option>
              <option>Mortgages</option>
              <option>Business</option>
            </select>
          </div>

          <div>
            <label>Currency</label>
            <select className="select">
              <option>US Dollar</option>
              <option>Canadian Dollar</option>
              <option>Pound</option>
              <option>Euro</option>
              <option>Chinese Yuan</option>
              <option>Hongkong Dollar</option>
              <option>Thai Baht</option>
              <option>Lira</option>
            </select>
          </div>
        </div>

        {/* <!-- Password --> */}
        <div className="flex-container">
          <div>
            <FormInputWithLabel
              label="Password"
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <div>
            <FormInputWithLabel
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        {/* <!-- Passport --> */}
        <div>
          <div>
            <FormInputWithLabel label="Passport Photo" type="file" />
          </div>
        </div>

        {/* <!-- Submit Button --> */}
        <div className="signup__form--submit">
          <button type="submit">Process Information</button>
        </div>

        {/* <!-- Open a New Account --> */}
        <div className="sign_in">
          Already have an account?
          <NavLink to="/login"> Login</NavLink>
        </div>
      </form>

      {/* LOGIN FORM */}
    </div>
  );
};

export default SignUp;
