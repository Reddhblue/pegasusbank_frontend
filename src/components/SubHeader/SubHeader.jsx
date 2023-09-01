import "./SubHeader.scss";

const SubHeader = (props) => {
  return (
    <div className="background__subheader">
      <div className="enclosure subheader">
        <div className="subheader__content">
          <h1>{props.heading}</h1>
          <p>UNIVERSAL BANK</p>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
