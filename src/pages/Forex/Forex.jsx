import "./Forex.scss";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import { Fragment } from "react";

const Forex = () => {
  return (
    <Fragment>
      <Navbar />
      <SubHeader heading="FOREX TRADING" />

      <div className="background__forex">
        <div className="enclosure forex">
          <h2>FOREX</h2>
          <p>
            The forex market has been around for centuries. People have always
            exchanged or bartered goods and currencies to purchase goods and
            services. However, the forex market, as we understand it today, is a
            relatively modern invention Forex (FX) is a portmanteau of foreign
            currency and exchange. Foreign exchange is the process of changing
            one currency into another for a variety of reasons, usually for
            commerce, trading, or tourism. A The foreign exchange (also known as
            forex or FX) market is a global marketplace for exchanging national
            currencies. Because of the worldwide reach of trade, commerce, and
            finance, forex markets tend to be the largest and most liquid asset
            markets in the world. Currencies trade against each other as
            exchange rate pairs. For example, EUR/USD is a currency pair for
            trading the euro against the U.S. dollar. Forex markets exist as
            spot (cash) markets as well as derivatives markets, offering
            forwards, futures, options, and currency swaps. Market participants
            use forex to hedge against international currency and interest rate
            risk, to speculate on geopolitical events, and to diversify
            portfolios, among other reasons.
          </p>
          <h3>What Is the Forex Market?</h3>
          <p>
            The forex market is by far the largest and most liquid financial
            market in the world, with an estimated average global daily turnover
            of more than US$6.5 trillion — which has risen from $5 trillion just
            a few years ago. The foreign exchange market is where currencies are
            traded. Currencies are important because they allow us to purchase
            goods and services locally and across borders. International
            currencies need to be exchanged to conduct foreign trade and
            business. One critical feature of the forex market is that there is
            no central marketplace or exchange in a central location, as all
            trading is done electronically via computer networks. This is known
            as an over the counter (OTC) market.
          </p>
          <h3>What Is the Forex Trading?</h3>
          <p>
            Forex trading is the process of speculating on currency prices to
            potentially make a profit. Currencies are traded in pairs, so by
            exchanging one currency for another, a trader is speculating on
            whether one currency will rise or fall in value against the other.
            The value of a currency pair is influenced by trade flows, economic,
            political and geopolitical events which affect the supply and demand
            of forex. This creates daily volatility that may offer a forex
            trader new opportunities. Online trading platforms provided by
            global brokers like Pegasus Savings mean you can trade from your phone, laptop,
            tablet or PC.
          </p>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Forex;
