import Navbar from "../../components/Navigation/Navbar/Navbar";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import "./RetirementAccount.scss";

import { Fragment } from "react";

const RetirementAccount = () => {
  return (
    <Fragment>
      <Navbar />
      <SubHeader heading="RETIREMENT ACCOUNT" />

      <div className="background__retirementaccount">
        <div className="enclosure retirementaccount">
          <div>
            <p>ACCOUNTING</p>
            <h2>Retirement Accounts</h2>
          </div>
          <p>
            Start building your retirement nest egg today, with our range of
            Individual Retirement Accounts.
          </p>

          <h3>Understanding Retirement Planning</h3>
          <p>
            In the simplest sense, retirement planning is what one does to be
            prepared for life after paid work ends. This isn't just financially
            but in all aspects of life. The non-financial aspects include
            lifestyle choices such as how to spend time in retirement, where to
            live, and when to quit working altogether, among other things. A
            holistic approach to retirement planning considers all these areas.
          </p>

          <h3>Determining Your Retirement Needs</h3>
          <p>
            Retirement planning's foundation is laid well before retirement. The
            sooner you start, the better. Your personalized "magic number"
            guides comfortable retirement savings, with rules of thumb offering
            insights:
            <p>
              <span>-</span>$1 million was once a common retirement benchmark.
            </p>
            <p>
              <span>-</span>
              The 80% rule advises living on 80% of retirement income, typically
              calculated over 20 years.
            </p>
            <p>
              <span>-</span>Some suggest adjusting lifestyles to match available
              savings.
            </p>
          </p>

          <h3>Steps to Effective Retirement Planning</h3>
          <p>
            <span>-</span>Develop a plan with retirement goals, start date, and
            savings targets.
          </p>
          <p>
            <span>-</span>Set aside monthly funds via automatic deductions for
            consistency.
          </p>
          <p>
            <span>-</span> Optimize accounts—like 401(k)s—and maintain an
            emergency fund.
          </p>
          <p>
            <span>-</span>Regularly review and adjust investments based on life
            changes.
          </p>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default RetirementAccount;
