import Navbar from "../../components/Navigation/Navbar/Navbar";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";

import { Fragment } from "react";

import "./ContactUs..scss";

const ContactUs = () => {
  return (
    <Fragment>
      <Navbar />
      <SubHeader heading="CONTACT US" />

      <div className="background__contactus">
        <div className="enclosure contactus">
          <h2>CONTACTS</h2>
          <p>
            We take great pride in everything that we do, control over products
            allows us to ensure our customers receive the best quality service.
          </p>

          <h3>Office BR 3 </h3>
          <p>02 Principal Pl, London EC2A 2BA, United Kingdom</p>

          <h3>Office BR 2</h3>
          <p>Mies-van-der-rohe-strasse 6, 80807 Munich, Germany</p>

          <h3>Office BR 1 </h3>
          <p>Nepfurdo u. 22, 1138 Budapest, Hungary</p>

          <h3>Office HQ</h3>
          <p>
            Paphos Banking Center 20 Griva Digeni Ave., CY-8061 Paphos, Cyprus
          </p>

          <h3>Email </h3>
          <p>info@universalbanks.com</p>

          <h3>Whatsapp </h3>
          <p>+357 24 030240</p>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default ContactUs;
