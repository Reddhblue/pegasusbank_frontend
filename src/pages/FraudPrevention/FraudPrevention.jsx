import Navbar from "../../components/Navigation/Navbar/Navbar";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import "./FraudPrevention.scss";

import { Fragment } from "react";

const FraudPrevention = () => {
  return (
    <Fragment>
      <Navbar />
      <SubHeader heading="FRAUD ABSTENTION" />

      <div className="background__fraudprevention">
        <div className="enclosure fraudprevention">
          <h2>Fraud and Prevention</h2>
          <p>
            Identify and eliminate application and online fraud. Address the
            proliferation of identity theft and synthetic identities. Our fraud
            detection program provides a single, end-to-end framework for better
            fraud detection and greater operational efficiency across multiple
            channels and products.
          </p>
          <h3>Detect more fraud, and reduce your losses.</h3>
          <p>
            Our unique, hybrid analytic approach uses multiple techniques –
            automated business rules, predictive modeling, text mining, database
            searches, exception reporting, network link analysis, etc. – to spot
            more suspicious activity with greater accuracy. A powerful fraud
            analytics engine uses embedded AI and machine learning techniques,
            combined with traditional detection methods, to process all data
            (not just a sample) in real time or in batch, to find more fraud and
            reduce false positives. And by analyzing device data in conjunction
            with demographic data, you can quickly uncover application and
            online banking fraud.
          </p>
          <h3>Get a consolidated view of fraud risk.</h3>
          <p>
            Identify cross-brand/product fraud by viewing customer accounts and
            transactions for all lines of business in one consolidated view. A
            unique visualization interface lets you spot linked entities and
            banking fraud crime rings that you would otherwise miss. Social
            network diagrams and sophisticated data mining capabilities enable
            you to better understand new banking fraud threats, so you can
            prevent substantial losses early. And stay on top of changing fraud
            trends by continuously improving models and adapting the system.
          </p>
          <h3>
            Boost investigator efficiency, reduce false positives and gain a
            competitive advantage.
          </h3>
          <p>
            The solution applies risk- and value-based scoring models to
            accurately score and prioritize alerts before they go to
            investigators. With the time saved, investigators can work more
            cases with greater efficiency, and focus on higher-value networks
            that generate a better ROI. More accurate scoring also means fewer
            false positives – and that translates to less customer inconvenience
            and greater customer satisfaction. You can also boost the efficiency
            of collection processes by identifying banking fraud losses that
            result from synthetic identities and have little to no chance of
            recovery.
          </p>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default FraudPrevention;
