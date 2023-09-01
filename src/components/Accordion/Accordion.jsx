import "./Accordion.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={onClick}>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={`icon ${isOpen ? "open" : ""}`}
        />
        <p className="accordion-title">{title}</p>
      </div>
      {isOpen && <p className="accordion-content">{content}</p>}
    </div>
  );
};

export default Accordion;
