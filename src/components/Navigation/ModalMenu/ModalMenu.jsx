/* eslint-disable react/prop-types */

import "./ModalMenu.scss";

const ModalMenu = (props) => {
  return (
    <div className="modalMenu">
      <p>
        <a href="#">{props.name}</a>
      </p>
    </div>
  );
};

export default ModalMenu;
