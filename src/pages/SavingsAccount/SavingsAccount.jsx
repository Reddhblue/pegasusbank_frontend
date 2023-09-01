import Navbar from "../../components/Navigation/Navbar/Navbar";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import "./SavingsAccount.scss";

import { Fragment } from "react";

const SavingsAccount = () => {
  return (
    <Fragment>
      <Navbar />
      <SubHeader heading="SAVINGS ACCOUNT" />

      <div className="background__savingsaccount">
        <div className="enclosure savingsaccount">
          <div>
            <p>ACCOUNTING</p>
            <h2>Savings Accounts</h2>
          </div>
          <p>
            A savings account is a safe place to hold your money. It’s meant to
            help you build your money for the future.
          </p>

          <h3>What is a Savings Account?</h3>
          <p>
            A savings account is a typical account at a bank or a credit union
            that allows an individual to deposit, secure, or withdraw money when
            the need arises. A savings account usually pays some interest on
            deposits, although the rate is quite low. As of 2019, an average
            account pays slightly below 1% annually. There are savings accounts
            that offer higher rates, which allow customers to increase their
            savings more quickly while keeping money in a safe place.
          </p>

          <h3>Why Open a Savings Account?</h3>
          <p>
            A savings account provides a secure method of storing money,
            minimizing risks associated with losing or damaging cash at home. By
            placing funds in a bank, the potential for loss due to theft, fire,
            or other incidents is mitigated, bolstered by federal government
            insurance. This arrangement discourages impulsive spending, aiding
            individuals in adhering to budgets and achieving financial
            objectives. Moreover, owning a bank account not only facilitates
            daily financial activities but also curbs impulse buying tendencies.
            Our customer-centric approach ensures convenient access to funds;
            when needed, customers can easily withdraw or transfer funds between
            accounts. Cash dispensers and over-the-counter services permit
            unlimited cash withdrawals, offering flexibility within transfer
            restrictions.
          </p>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default SavingsAccount;
