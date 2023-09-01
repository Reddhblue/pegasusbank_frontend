import Card from "../../../components/Card/Card";
import "./SolutionsContent.scss";

const SolutionsContent = () => {
  return (
    <div className="background__solutioncontent">
      <div className="enclosure solutioncontent">
        <p>
          Our platform helps you execute, analyze and settle transactions with
          ease and efficiency, enabling you to focus on alpha capture knowing
          your infrastructure is up to the task.
        </p>
        <h2 className="solutioncontent__heading">
          Bringing together the breadth and depth of our expertise to meet your
          needs
        </h2>
        <p>
          Universal Banks Solutions seeks to deliver exceptional outcomes by
          drawing on the full range of investment, technology, operational,
          governance, legal, consultancy and research capabilities across the
          whole of Universal Banks. We understand that major investors
          increasingly have needs that go beyond just financial returns. From
          pension funds needing to match income streams to liabilities, to
          insurance companies navigating regulatory capital constraints, to
          wealth managers wanting to digitise their client offerings, many
          organisations need expertise that can help deliver robust and
          multi-faceted outcomes. Modern life is often complicated by an
          increasing number of moving pieces, and personal finance is no
          different. Particularly as you reach the peak earning years of your
          career and begin transition planning for retirement, a number of
          important decisions need to be made and elements aligned to maximize
          the likelihood of your financial success. Whether it’s monitoring your
          portfolio and its fund managers or keeping tabs on tax code changes
          and regulatory adjustments, at Universal Banks, we help remove the
          worry of your financial life by coordinating all of these moving
          parts.
        </p>

        <div className="solutioncontent__card">
          <Card
            source={"/assets/Solution-card-1.jpg"}
            heading={"Protection Advice"}
            text={
              "Nobody likes to think of the unexpected. But have you considered how you and your family would cope financially if illness or injury forced you off work, or if something worse were to happen? The good news is that putting a safety net in place is relatively easy and can be inexpensive to create. We can advise you on the options available to make sure you are able to cope financially if the worst happens."
            }
          />
          <Card
            source={"/assets/Solution-card-2.jpg"}
            heading={"Mortgage Advice"}
            text={
              "Choosing the right mortgage can save you thousands of pounds. That applies whether you are taking out a new mortgage or re-mortgaging. But finding the deal that best fits your circumstances isn’t easy. There are hundreds of different options, the market changes daily and the variables can be hard to compare. Yet your mortgage is one of the biggest financial commitments of your life. It pays to get it right."
            }
          />
          <Card
            source={"/assets/Solution-card-3.jpg"}
            heading={"Equity Release"}
            text={
              "Equity release is about using your property to release a capital lump sum. That might be to supplement your pension, provide a living inheritance to your family, or to free up money for a large one-off expense. Releasing equity from your property is a big decision and there are some crucial things to consider. It’s important you get the right advice to make an informed decision with confidence."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionsContent;
