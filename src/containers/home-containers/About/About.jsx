import Card from "../../../components/Card/Card";
import "./About.scss";

const About = () => {
  return (
    <div className="background__about">
      <div className="enclosure about">
        <div className="about__card">
          <Card
            source={"/assets/card1.jpg"}
            heading={"Corporate Governance"}
            text={
              "We believe that good corporate governance provides the foundation for a high-performing organisation, and by embedding good practices, we'll preserve and strengthen stakeholder confidence and long-term value."
            }
          />
          <Card
            source={"/assets/card2.jpg"}
            heading={"Sustainability of our customers"}
            text={
              "Throughout the pandemic, we developed and implemented customer hardship policies and we're now working on new ways to support our customers to be more sustainable and resilient, now and into the future."
            }
          />
          <Card
            source={"/assets/card3.jpg"}
            heading={"Financial Inclusion"}
            text={
              "All SMEs deserve to have access to financial services to help grow their business. We believe that we can help provide more financial inclusion in Australia through, and to, our SME community."
            }
          />
        </div>

        <div className="about__projection">
          <h3>Join us for a greener future</h3>
          <p>
            As a more sustainable bank, we're determined to do our part to fight
            climate change and protect the environment. To reach net zero, we're
            working towards a one third reduction target in our carbon emissions
            by 2030 and committing to offset our emissions annually.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
