import Carousel from "../../../components/Carousel/Carousel";
import "./Culture.scss";

const carouselData = [
  { src: "/assets/slide1.jpg", alt: "carousel-image-1" },
  { src: "/assets/slide2.jpg", alt: "carousel-image-2" },
];

const Culture = () => {
  return (
    <div className="background__culture">
      <div className="enclosure culture">
        <div className="culture__carousel">
          <Carousel carouselData={carouselData} />
        </div>
        <div className="culture__content">
          <div className="culture__content--title">
            <h3>PEOPLE AND CULTURE</h3>
            <h2>Our Unique Culture</h2>
          </div>
          <p>
            At UB, we're proudly different. Our people and culture are key to
            our success, and to achieving our purpose of becoming most trusted
            presonal / SME business bank.
            <br />
            <br />
            Our culture is foundational to our success and underpinned by our
            core values: Trust, Teamwork, Accountability and Performance. Our
            organisational architecture has been specifically designed to
            deliver on our purpose and we hand-select people who are passionate
            about supporting SMEs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Culture;
