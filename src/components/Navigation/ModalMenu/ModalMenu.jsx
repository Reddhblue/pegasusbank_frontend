/* eslint-disable react/prop-types */

import NavAccordion from "../NavAccordion/NavAccordion";

import "./ModalMenu.scss";

const ModalMenu = (props) => {
  return (
    <div className="modalMenu">
      <NavAccordion
        id={props.id}
        name={props.name}
        items={props.items}
        link={props.link}
        isOpen={props.isOpen}
        onClick={props.onClick}
      />
    </div>
  );
};

export default ModalMenu;
