import { NavLink } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import "./Sidebar.scss";

import {
  faTableColumns,
  faUser,
  faPaperPlane,
  faLayerGroup,
  faRightFromBracket,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__nav">
        <div className="sidebar__nav--content">
          <NavLink to="/">
            <img src="/assets/pegasuslogo.png" alt="logo" />
          </NavLink>
        </div>
      </div>

      <div className="sidebar__content">
        <h4 className="sidebar__content--header">ACCOUNT MENU</h4>

        <MenuItem
          title="Overview"
          icon={faTableColumns}
          link="/dashboard/overview"
        />
        <MenuItem
          title="Account Info"
          icon={faUser}
          link="/dashboard/account-info"
        />
        <MenuItem
          title="Transfer"
          icon={faPaperPlane}
          link="/dashboard/transfer"
        />
        <MenuItem
          title="Investment"
          icon={faLayerGroup}
          link="/dashboard/investments"
        />
        <MenuItem
          title="Statement"
          icon={faFileLines}
          link="/dashboard/statement"
        />
        <MenuItem title="Cards" icon={faLayerGroup} link="/dashboard/cards" />
        <MenuItem title="Logout" icon={faRightFromBracket} link="/login" />
      </div>
    </div>
  );
};

export default Sidebar;
