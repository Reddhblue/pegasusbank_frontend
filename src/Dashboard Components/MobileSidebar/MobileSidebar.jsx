import "./MobileSidebar.scss";
import { NavLink } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";

import {
  faTableColumns,
  faUser,
  faPaperPlane,
  faLayerGroup,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const MobileSidebar = (props) => {
  return (
    <div className="mobilesidebar">
      <div className="mobilesidebar__content">
        <h4 className="mobilesidebar__content--header">ACCOUNT MENU</h4>

        <MenuItem
          title="Overview"
          icon={faTableColumns}
          link="/dashboard/overview"
          click={props.click}
        />
        <MenuItem
          title="Account Info"
          icon={faUser}
          link="/dashboard/account-info"
          click={props.click}
        />
        <MenuItem
          title="Transfer"
          icon={faPaperPlane}
          link="/dashboard/transfer"
          click={props.click}
        />
        <MenuItem
          title="Fixed Deposit"
          icon={faLayerGroup}
          link="/dashboard/fixed-deposit"
          click={props.click}
        />
        <MenuItem
          title="Investment"
          icon={faLayerGroup}
          link="/dashboard/investments"
          click={props.click}
        />
        <MenuItem
          title="Cards"
          icon={faLayerGroup}
          link="/dashboard/cards"
          click={props.click}
        />
        <MenuItem
          title="Logout"
          icon={faRightFromBracket}
          link="/login"
          click={props.click}
        />
      </div>
    </div>
  );
};

export default MobileSidebar;
