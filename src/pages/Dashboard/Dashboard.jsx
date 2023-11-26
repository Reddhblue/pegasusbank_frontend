import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../../Dashboard Components/Sidebar/Sidebar";
import "./Dashboard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import MobileSidebar from "../../Dashboard Components/MobileSidebar/MobileSidebar";
import { UserContext } from "../../context/UserDetailsContext";

const Dashboard = () => {
  const [clicked, setClicked] = useState(false);
  const { user } = useContext(UserContext);

  function clickHandler() {
    setClicked((prevState) => !prevState);
  }

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <Sidebar />

      {/* Contents */}
      <div className="dashboard__content">
        {/* DESKTOP NAVIGATION */}
        <div className="dashboard__content--nav">
          <div className="dashboard__content--nav_profilepic">
            <img
              src={
                user?.profile_img ??
                "/assets/wallpaperflare.com_wallpaper (7).jpg"
              }
              alt="profile-pic"
            />
          </div>

          <div className="dashboard__content--nav_userprofile">
            <div className="dashboard__content--nav_userprofile-greeting">
              {user?.firstname} {user?.lastname}
            </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div className="dashboard__content--mobilenav">
          <FontAwesomeIcon
            icon={faBars}
            className="dashboard__content--mobilenav_icon"
            onClick={clickHandler}
          />

          {clicked && <div className="backdrop" onClick={clickHandler}></div>}

          {clicked && (
            <MobileSidebar
              className="dashboard__content--mobilenav_sidebar"
              click={clickHandler}
            />
          )}

          <div className="dashboard__content--mobilenav_logo">
            <NavLink to="/">
              <img src="/assets/logo1.png" alt="logo" />
            </NavLink>
          </div>

          <div className="dashboard__content--mobilenav_profile">
            <div className="dashboard__content--mobilenav_profile-pic">
              <img
                src="/assets/wallpaperflare.com_wallpaper (7).jpg"
                alt="profile-pic"
              />
            </div>

            <div className="dashboard__content--mobilenav_profile-user">
              <div className="dashboard__content--mobilenav_profile-user_username">
                johndoe11
              </div>

              <div className="dashboard__content--mobilenav_profile-user_greeting">
                Welcome John Doe!
              </div>
            </div>
          </div>
        </div>

        <Outlet />

        <div className="dashboard__footer">
          <p>
            ©2015-2023 <NavLink to="/">Universal Banks</NavLink>. All rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
