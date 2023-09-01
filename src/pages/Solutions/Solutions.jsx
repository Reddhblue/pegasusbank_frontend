import Navbar from "../../components/Navigation/Navbar/Navbar";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";

import { Fragment } from "react";
import SolutionsContent from "../../containers/Solutions-containers/SolutionsContent/SolutionsContent";

const Solutions = () => {
  return (
    <Fragment>
      <Navbar />
      <SubHeader heading="FINANCIAL SOLUTIONS" />
      <SolutionsContent />
      <Footer />
    </Fragment>
  );
};

export default Solutions;
