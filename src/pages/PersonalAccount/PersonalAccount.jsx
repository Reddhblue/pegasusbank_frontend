import Navbar from "../../components/Navigation/Navbar/Navbar";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import "./PersonalAccount.scss";

import { Fragment } from "react";

const PersonalAccount = () => {
  return (
    <Fragment>
      <Navbar />
      <SubHeader heading="PERSONAL ACCOUNT" />

      <div className="background__personalaccount">
        <div className="enclosure personalaccount">
          <div>
            <p>ACCOUNTING</p>
            <h2>Personal Accounts</h2>
          </div>
          <p>
            A personal account is an account for use by an individual for that
            person's own needs. It is a relative term to differentiate them from
            those accounts for business or corporate use. This is also a type of
            account offered by banks to customers, that is consumers rather than
            businesses, intermediaries and institutions. The distinction is made
            between personal accounts and other accounts in banking and
            accounting because different account types have different
            implications and treatments. For a personal account, there should
            only be one person depositing and withdrawing money and therefore
            security measures will be in place to make sure the right person is
            accessing the funds. The customers of personal banking services and
            products are commonly the general public that includes adult
            individuals, retirees, students, children who may be citizens,
            residents and non-residents depending on the requirements of the
            country or bank. While affluent individuals may also use personal
            banking services, they may also be offered private banking services
            by banks which can include more sophisticated services and
            investments.
          </p>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default PersonalAccount;
