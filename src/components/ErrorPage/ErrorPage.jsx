import { NavLink } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="section">
      <h1 className="error">404</h1>
      <div className="page">
        Ooops!!! The page you are looking for is not found
      </div>
      <NavLink className="back-home" to="/">
        Back to home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
