import FormInputWithLabel from "../../components/FormInputWithLabel/FormInputWithLabel";
import { NavLink } from "react-router-dom";
import "./ForgotPassword.scss";

const ForgotPassword = () => {
  return (
    <div className="forgotpassword">
      <NavLink to="/" className="logo">
        <img src="/assets/logo1.png" alt="logo" />
      </NavLink>

      <form action="" className="forgotpassword__form">
        <h2>Reset Account Password</h2>

        <p>
          To recover your account please provide your email or username to
          verify it's associated with an account.
        </p>

        {/*  <!-- Username or Email --> */}
        <div>
          <FormInputWithLabel
            label="Username or Email"
            type="text"
            placeholder="Username or Email"
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div className="forgotpassword__form--submit">
          <button type="submit">Submit</button>
        </div>

        {/* <!-- Link To Home --> */}
        <div className="forgotpassword__form--link">
          <p>
            Click <NavLink to="/login"> Here </NavLink>To Login
          </p>
        </div>
      </form>

      {/* LOGIN FORM */}
    </div>
  );
};

export default ForgotPassword;
