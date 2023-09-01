import { useState } from "react";
import "./Approach.scss";
import Accordion from "../../../components/Accordion/Accordion";

const accordions = [
  {
    title: "Focus on Investment Opportunities and Performance",
    content:
      "By combining the depth of our expertise with the breadth of our platform, we aim to identify market opportunities and provide innovative solutions to help our clients reach their unique investment objectives. Our substantial scale and stability have made us a leader in this space for over 20 years.",
  },
  {
    title: "Knowledge Transfer Across Leading Institutions",
    content:
      "We work with clients to provide insights on macroeconomic and market views as well as investment approaches. Our partnerships with leading banks allow us to share best practices and ideas across our global client base.",
  },
  {
    title: "Access to Global Thought Leaders",
    content:
      "We offer central banks proprietary research and market insights in an ever-changing macro environment, convening the world's experts and providing access to their thoughts on relevant global trends.",
  },
];

function Approach() {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (index === openAccordionIndex) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  return (
    <div className="background__approach">
      <div className="enclosure approach">
        <div className="approach__content">
          <h2>Our Approach</h2>
          <p>
            We help sovereign institutions navigate shifting dynamics that
            impact both their existing asset allocations and long-term
            investment strategies. Our global network and longstanding
            relationships allow us to identify relevant market trends and
            provide thoughtful, timely and innovative solutions.
          </p>
          <div className="approach__content--accordion">
            {accordions.map((accordion, index) => (
              <Accordion
                key={index}
                title={accordion.title}
                content={accordion.content}
                isOpen={index === openAccordionIndex}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="approach__image">
          <img src="/assets/meeting.jpg" alt="meeting-img" />
        </div>
      </div>
    </div>
  );
}

export default Approach;
