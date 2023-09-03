import "./SignUp.scss";

import { NavLink } from "react-router-dom";
import FormInputWithLabel from "../../components/FormInputWithLabel/FormInputWithLabel";
import CountrySelector from "../../components/CountrySelector/CountrySelector";

const SignUp = () => {
  return (
    <div className="signup">
      <form action="" className="signup__form">
        <h2>Onboarding</h2>

        {/*  <!-- Username & Email --> */}
        <div className="flex-container mg-sm">
          <div>
            <FormInputWithLabel
              label="Username"
              type="text"
              placeholder="Username"
            />
          </div>

          <div>
            <FormInputWithLabel
              label="E-Mail Address"
              type="text"
              placeholder="E-Mail Address"
            />
          </div>
        </div>

        {/* <!-- Password --> */}
        <div className="flex-container mg-sm">
          <div className="signup__form--password">
            <FormInputWithLabel
              label="Password"
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <div className="signup__form--password">
            <FormInputWithLabel
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        {/* <!-- Mobile and country --> */}
        <div className="flex-container">
          <div className="signup__form--mobile">
            <FormInputWithLabel
              label="Mobile"
              type="tel"
              placeholder="+1-202-555-0157"
            />
          </div>

          {/* COUNRTY SELECTOR */}
          <CountrySelector />
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
