import Navbar from "../../components/Navigation/Navbar/Navbar";
import SubHeader from "../../components/SubHeader/SubHeader";
import Content from "../../containers/WhoWeAre-containers/Content/Content";
import Footer from "../../components/Footer/Footer";

import { Fragment } from "react";

const WhoWeAre = () => {
  return (
    <Fragment>
      <Navbar />
      <SubHeader heading="WHO WE ARE" />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default WhoWeAre;
