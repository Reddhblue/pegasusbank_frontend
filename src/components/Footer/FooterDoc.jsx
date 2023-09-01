import "./FooterDoc.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMinus } from "@fortawesome/free-solid-svg-icons";

const FooterDoc = (props) => {
  return (
    <div className="footer__doc">
      <FontAwesomeIcon icon={faMinus} className="footer__doc--font" />
      <a href="#">{props.text}</a>
    </div>
  );
};

export default FooterDoc;
