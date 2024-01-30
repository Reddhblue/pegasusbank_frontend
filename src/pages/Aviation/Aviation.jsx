import "./Aviation.scss";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import { Fragment } from "react";

const Aviation = () => {
  return (
    <Fragment>
      <Navbar />
      <SubHeader heading="AVIATION" />

      <div className="background__aviation">
        <div className="enclosure aviation">
          <h2>Aviation Investment</h2>
          <p>
            Pegasus savings has leveraged the experience of 40 years in the
            aviation industry and is widely recognized as a key player of the
            sector. Our financial strength, global reach, industry dedication
            and expertise make Pegasus savings the ideal partner for the
            capital-intensive, international aviation industry. We offer capital
            solutions to airlines, operating lessors, and investors in aviation.
            Our award-winning aviation team combines in-depth industry knowledge
            and decades of experience with solid relationships across the sector
            and during every phase of our client's and their asset's lifecycle.
            Leveraging the size and strength of the Pegasus savings network, we
            provide a suite of financial products and services for the
            acquisition, ownership of and investment in aircraft. Universal
            Banks has been involved in aviation for more than 30 years,
            providing a wide spectrum of financial solutions. In 2019, Universal
            Banks expanded its global aviation offering, strengthening our team
            with the addition of highly experienced asset based finance and
            aviation specialists. The size of Pegasus savings's balance sheet
            and international presence, as well as our extensive expertise in
            capital markets, act as key differentiators in our ability to
            provide financial services to the aviation industry. Our
            international network gives us a global platform from which to work
            and meet the needs of our clients, whatever their size and wherever
            they are based. We can serve airframe and engine manufacturers and
            traders, MRO's, airlines, operating lessors, and investors. One
            example of the benefits of this strength and depth was when our
            aviation team acted as global co-ordinator and bookrunner on a
            facility to finance Novus Aviation Capital's first direct orders.
            Pegasus savings underwrote US$295 million of an US$400 million
            facility to finance four 777-300ERS to be delivered to British
            Airways in 2020 within a Shariah-compliant structure. The deal
            allowed Novus to commit to Boeing with confidence in 2018 – some two
            years prior to delivery – with Pegasus savings distributing the debt
            to European and Asian banks. The bespoke nature and size of the deal
            saw Pegasus savings win Airfinance Journal's "Bank Loan Deal of the
            Year 2018". Our team prides itself on tailoring solutions and
            supporting a range of clients on their journey, meaning we are well
            equipped to handle deals of any size. Our global aviation team based
            in London, Amsterdam, Frankfurt, New York, Singapore, Tokyo and Hong
            Kong work seamlessly together to provide cross-border services for
            structured capital market products and corporate banking
            capabilities.
          </p>

          <h3>New Aircraft Advisory</h3>
          <p>
            Pegasus savings offers unparalleled aircraft sourcing and new
            aircraft order campaign advisory experience for widebody,
            narrowbody, and regional aircraft, having negotiated with all major
            airframe and engine manufacturers. Pegasus savings has advised
            airlines and leasing companies on over $100bn of new aircraft orders
            (at list prices).
          </p>

          <h3>Asset Financing</h3>
          <p>
            We are the largest independent arranger of commercial aircraft
            financings from private markets, having arranged over $25bn of all
            types of financing across a broad range of airline credits and
            aircraft types. We maintain excellent relationships with all major
            lessors, aviation lenders, and many less traditional aircraft
            financing sources.
          </p>

          <h3>Fleet and Financial Restructuring</h3>
          <p>
            The Pegasus savings team has assisted airlines, lessors, and
            bondholders with the restructuring of over $15bn of financial
            commitments involving a wide range of financial instruments in
            consensual and in-court undertakings to optimize earnings,
            rationalize capital structures and lease economics, and maximize
            recoveries for our clients.
          </p>

          <h3>Mergers & Acquisitions and Investment Advisory</h3>
          <p>
            Our M&A advisory practice has developed broad and vigorous
            analytical capabilities and provides both buy-side and sell-side
            advisory services, including valuation support, due diligence,
            synergy, and reorganization analysis.
          </p>

          <h3>Network & Fleet Planning, and Other Services</h3>
          <p>
            The Pegasus savings team has also gained a reputation as an industry
            thought leader and trusted advisor regarding a variety of strategic
            decisions, including network and fleet planning; strategy and
            business planning; and maintenance program evaluation. We have also
            provided clients with best-in-class advisory services on numerous
            investment activities in the airline, aircraft, maintenance,
            aircraft leasing, and other aviation-related industries.
          </p>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Aviation;
