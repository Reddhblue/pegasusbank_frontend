import "./Investment.scss";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import { Fragment } from "react";

const Investment = () => {
  return (
    <Fragment>
      <Navbar />
      <SubHeader heading="INVESTMENT MANAGEMENT" />

      <div className="background__investment">
        <div className="enclosure investment">
          <h2>Understanding Investment Management</h2>
          <p>
            In short, our investment manager’s job is to make you money on your
            investments. When you hire our investment manager, the first thing
            they will do is help you define your investing goals and profile.
            Based on your goals and needs, our investment manager will typically
            develop a custom portfolio strategy. In some cases, they may set you
            up with a model portfolio that employs a preset strategy. In
            addition, they will identify the best asset allocation for your
            portfolio. As part of an ongoing relationship, your manager will
            periodically adjust this allocation based on your changing goals.
            Once your portfolio plan is put in place, our investment manager
            will arrange and initiate the actual investment of your money. Most
            investment management firms don’t physically hold on to your assets.
            Instead, they use what’s called “custodial accounts” at larger
            brokerage firms. This can include brokerages like Charles Schwab, TD
            Ameritrade and others. As your portfolio ages, our investment
            manager will buy and sell securities on either a discretionary or
            non-discretionary basis according to your plan. A discretionary
            relationship with your manager means they have the right to make
            investment decisions on their own, in your name. On the other hand,
            a non-discretionary relationship with your manager means they must
            run every decision by you before initiating it.
          </p>

          <h3>We are fiduciaries:</h3>
          <p>
            At Universal Banks, we were a fiduciary long before it became
            fashionable to say so. We sit on the same side of the table as our
            clients; there simply is no other way to do business that produces
            positive, long-term success for our clients. Your objectives must
            come first. As fiduciaries we are legally required to do so, but it
            also happens to be the right way. We are as transparent as possible.
            You will know exactly how much you are paying and what you receive
            in return. And we only get paid on assets under management; no
            referral fees or commissions of any kind.
          </p>

          <h3>Our investment philosophy:</h3>
          <p>
            There is no such thing as passive investing. Every investment
            decision is active and investment management is at our core. We do
            our own investment management and apply a process refined since we
            started in 1987. We begin with the asset allocation which flows from
            your financial plan and we conduct the research on the companies in
            which we invest. Most advisors are happy to delegate security
            research, favoring other managers or defined market exposures
            instead, which add an additional layer of fees for you and separate
            you further from the understanding of what you own. We approach
            investing differently. Rather than blindly buy the whole market
            through good and bad, we prefer to know the companies we own in
            order to make informed, intentional decisions about the risks we
            accept in pursuit of your goals. This depth of knowledge also allows
            us to communicate effectively with you about the reasons behind each
            position. The responsibility for a good or bad investment decision
            starts and stops with us.
          </p>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Investment;
