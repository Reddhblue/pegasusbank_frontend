import "./UpdateAccountInfo.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import DashboardForm from "../../Dashboard Components/DashboardForm/DashboardForm";
import useForm from "../../custom_hooks/useForm";
import { BASE_URL } from "../../constants";
import { UserContext } from "../../context/UserDetailsContext";
import { useContext, useEffect } from "react";
import { toast } from "sonner";
import { AuthContext } from "../../context/AuthContext";

const UpdateAccountInfo = () => {
  const { user, forceRefresh } = useContext(UserContext);
  const { token } = useContext(AuthContext);

  const [formData, updateField, update, isLoading, formResponse, formError] =
    useForm({
      formData: {
        email: user?.email,
        phone: user?.phone,
        password: "",
      },
      submitOptions: {
        method: "PATCH",
        url: `${BASE_URL}/user`,
      },
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    update({
      headers: { Authorization: "Bearer " + token },
    });
  };

  useEffect(() => {
    if (!formResponse) return;
    if (formResponse.success) {
      toast.success("Edit successfull!");
      forceRefresh();
    }
  }, [formResponse]);

  useEffect(() => {
    if (formError) toast.error("Something went wrong");
  }, [formError]);

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

        <form
          className="updateaccountinfo__profiledata--form"
          onSubmit={handleSubmit}
        >
          {/*  UserName & Email --> */}
          <div className="updateaccountinfo__profiledata--form_flex">
            {/* <DashboardForm label="UserName" type="text" placeholder="John" /> */}

            <DashboardForm
              label="Email"
              type="email"
              placeholder="Example@domain.com"
              name="email"
              onChange={(e) => updateField("email", e.target.value)}
              value={formData.email}
            />

            <DashboardForm
              label="Mobile"
              type="tel"
              placeholder="+1(324)-882-0034"
              value={formData.phone}
              name="phone"
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>

          {/* Mobile & Password --> */}
          <div className="updateaccountinfo__profiledata--form_flex">
            <DashboardForm
              label="Password"
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              name="password"
              onChange={(e) => updateField("password", e.target.value)}
            />
          </div>
          <button type="submit"> Update</button>
          {/* <!-- Submit Button --> */}
        </form>
      </div>
    </div>
  );
};

export default UpdateAccountInfo;
