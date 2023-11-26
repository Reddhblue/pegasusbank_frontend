import { NavLink, useNavigate } from "react-router-dom";
import FormInputWithLabel from "../../components/FormInputWithLabel/FormInputWithLabel";
import "./Login.scss";
import useForm from "../../custom_hooks/useForm";
import { BASE_URL } from "../../constants";
import { ErrorContext } from "../../context/errors";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { setError } = useContext(ErrorContext);
  const { updateToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, updateField, login, isLoading, formResponse, formError] =
    useForm({
      formData: {
        email: "",
        password: "",
      },
      submitOptions: {
        method: "POST",
        url: `${BASE_URL}/auth/signin`,
      },
    });

  useEffect(() => {
    if (!formResponse) return;
    updateToken(formResponse.token);
    if (formResponse.success) navigate("/dashboard");
  }, [formResponse]);

  useEffect(() => {
    if (formError) setError({ message: formError?.message, show: true });
  }, [formError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  useEffect(() => {
    updateToken(null);
  }, []);

  return (
    <div className="login">
      <NavLink to="/" className="logo">
        <img src="/assets/logo1.png" alt="logo" />
      </NavLink>

      <form action="" className="login__form">
        <h2>Access your E-BANK</h2>

        {/*  <!-- Email --> */}
        <div>
          <FormInputWithLabel
            label="Email"
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={(e) => updateField(e.target.name, e.target.value)}
          />
        </div>

        {/* <!-- Password --> */}
        <div className="login__form--password">
          <NavLink to="/recoverpassword">Forgot Password?</NavLink>
          <FormInputWithLabel
            label="Password"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={(e) => updateField(e.target.name, e.target.value)}
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div className="login__form--submit">
          <button
            disabled={isLoading}
            type="submit"
            className="disabled:opacity-80 disabled:cursor-not-allowed "
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>

        {/* <!-- Open a New Account --> */}
        <div className="login__form--sign_up">
          Are you new? <NavLink to="/signup">Open an account</NavLink>
        </div>
      </form>

      {/* LOGIN FORM */}
    </div>
  );
};

export default Login;
