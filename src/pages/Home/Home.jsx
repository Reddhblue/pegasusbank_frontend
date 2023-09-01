import Header from "../../containers/home-containers/Header/Header";
import About from "../../containers/home-containers/About/About";
import Culture from "../../containers/home-containers/Culture/Culture";
import Approach from "../../containers/home-containers/Approach/Approach";
import Rationale from "../../containers/home-containers/Rationale/Rationale";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navigation/Navbar/Navbar";

import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Culture />
      <Approach />
      <Rationale />
      <Footer />
    </Fragment>
  );
};

export default Home;
