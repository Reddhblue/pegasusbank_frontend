import "./Footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import FooterDoc from "./FooterDoc";

const Footer = () => {
  return (
    <div className="background__footer">
      <div className="enclosure footer">
        <div className="footer__socials">
          <img src="/assets/pegasuslogo.png" alt="company-logo" />

          <p>A Smart Way to Bank and Grow Your Business</p>

          <em>info@dhbanking.com</em>

          <div className="footer__socials--media">
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>

          <div className="footer__socials--copyright">
            ©2015 - 2023 <span>Pegasus savings</span>. All Rights Reserved.
          </div>
        </div>

        <div className="footer__resources">
          <h2>RESOURCES</h2>
          <div className="footer__resources--pdf">
            <FooterDoc text="Attitude to Task" />
            <FooterDoc text="Complaint Handling Policy" />
            <FooterDoc text="SafeGuard" />
            <FooterDoc text="Future Financial Prospective" />
            <FooterDoc text="PR Base Prospectus" />
            <FooterDoc text="Future of Financial Markets" />
          </div>
        </div>

        <div className="footer__report">
          <h2>REPORTS</h2>
          <FooterDoc text="Financial Report & Statements 2022" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
