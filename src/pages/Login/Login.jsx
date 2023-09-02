import { NavLink } from "react-router-dom";
import FormInputWithLabel from "../../components/FormInputWithLabel/FormInputWithLabel";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <form action="" className="login__form">
        <h2>Access your E-BANK</h2>

        {/*  <!-- Username or Email --> */}
        <div>
          <FormInputWithLabel
            label="Username or Email"
            type="text"
            placeholder="Username or Email"
          />
        </div>

        {/* <!-- Password --> */}
        <div className="login__form--password">
          <NavLink to="/recoverpassword">Forgot Password?</NavLink>
          <FormInputWithLabel
            label="Password"
            type="password"
            placeholder="Enter Password"
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div className="login__form--submit">
          <button type="submit">Login</button>
        </div>

        {/* <!-- Open a New Account --> */}
        <div className="login__form--sign_up">
          Are you new? <NavLink to="#">Open an account</NavLink>
        </div>
      </form>

      {/* LOGIN FORM */}
    </div>
  );
};

export default Login;
