import "./Sma.scss";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import { Fragment } from "react";

const Sma = () => {
  return (
    <Fragment>
      <Navbar />
      <SubHeader heading="SMA" />

      <div className="background__sma">
        <div className="enclosure sma">
          <h2>Separate Managed Accounts</h2>
          <p>
            offers separately managed accounts (SMA) to those seeking another
            option to reach their financial goals. For many investors, mutual
            funds and exchange-traded funds are the only investment vehicles
            they know. For some investors, a third option exists to access
            financial markets through a separately managed account (SMA). Below
            we discuss the benefits of an SMA in building an investment
            portfolio, benefits our clients enjoy, and how it differs from
            mutual and exchange-traded funds.
          </p>

          <h3>The 6 Advantages of a Separately Managed Account</h3>
          <p>
            <span>Personalized approach - </span> Most mutual fund investors
            will never speak with the person managing their money. They are one
            of many thousands of shareholders, only the largest of which might
            merit the attention of their fund manager if they have any questions
            about decision-making or wish to learn more. SMA investors have a
            different experience. Many SMA managers are small business owners
            like us who tend to be more involved with clients and day-to-day
            operations. Thus, SMA managers can reduce the multiple levels
            between client and portfolio manager to create greater
            accessibility, with many having one-on-one working relationships.
          </p>

          <p>
            <span>Direct ownership - </span> With a mutual fund, the fund is the
            owner of any assets. Your money is pooled with other investors, you
            hold shares in the fund, and you are one step removed from your
            investments. With an SMA you retain direct ownership of the
            securities in your account. The assets in your account are
            registered in your name, not that of a fund. You will receive
            regular, comprehensive reporting, including your account’s buying
            and selling activity. Your account statements show the securities
            you own, the number of shares, and many other details. And you can
            check this information at any time. All this information and
            communication leads to greater transparency and serves as the basis
            for a better understanding of what you own.
          </p>

          <p>
            <span>Greater portfolio knowledge - </span> When you partner with an
            advisor to help manage your investments, it is wise to stay
            knowledgeable about your holdings, understand the logic behind the
            decisions, and recognize how those decisions will help you reach
            your goals. Mutual fund managers communicate quarterly in writing,
            but it relates only to the fund and not its effect on your
            portfolio. It offers no opportunity for a learning dialogue. With
            direct and personal access to the SMA manager, you can dive as
            deeply as needed to reach an appropriate comfort level and better
            understand how the selections will impact your portfolio. Better
            knowledge helps frame reasonable return expectations and limit
            unpleasant surprises.
          </p>

          <p>
            <span>Customization - </span> an SMA is not a one-kind-fits-all. It
            can be structured to exclude certain investments due to concentrated
            single-stock positions elsewhere. It can be structured to reflect
            personal values, restricting companies deemed less socially
            responsible or targeting companies that promote and support certain
            environmental, social, or governance practices. Or a client
            investing in an SMA focused on muni bonds could have the manager
            concentrate holdings in a specific state, plus tailor the account
            duration and other factors specific to the client’s situation.
            Mutual funds will offer no such customization.
          </p>

          <p>
            <span>Tax efficiency - </span> Unlike a mutual fund where capital
            gains from the portfolio are passed along to all shareholders in any
            taxable accounts, an SMA investor only pays taxes on realized gains
            in their specific portfolio. Because an SMA contains individual
            securities, you and your manager can decide when to take capital
            gains and losses based on your yearly tax situation. Or, instead of
            realizing capital gains, you can direct your manager to contribute
            appreciated securities to the charity of your choice. Doing so
            avoids capital gains tax on the sale and helps meet gifting
            commitments simultaneously.
          </p>

          <p>
            <span>Cost competitive - </span> SMA management fees are competitive
            with, and often less than, the fees charged by advisors using mutual
            or exchange-traded funds. For instance, many advisors charge an
            advisory fee in addition to mutual fund fees, creating two layers of
            fees. SMA manager fees often charge a single, lower fee for advisory
            and investment management services. SMAs used to be treated as an
            investment vehicle for high-net-worth investors with a matching cost
            structure, but they are often less expensive as they have become
            more available for smaller investors. Consider whether your advisor
            offers other services in their fee structure. And with trading costs
            at firms like Schwab and Fidelity going to zero, minimums for an SMA
            are lower than ever.
          </p>

          <p>
            Are there disadvantages? A few. First, while the minimums required
            to benefit from an SMA have dropped over the decades, it still
            requires at least $100,000 to obtain a broadly diversified
            portfolio. Below that level, mutual funds or exchange-traded funds
            are more efficient products. Second, because you own each security
            in your portfolio, the reports may be longer than for a portfolio
            that only uses funds. However, that depends mainly on the reporting
            used by your advisor and may not be a disadvantage for you.
          </p>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Sma;
