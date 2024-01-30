import "./SubHeader.scss";

const SubHeader = (props) => {
  return (
    <div className="background__subheader">
      <div className="enclosure subheader">
        <div className="subheader__content">
          <h1>{props.heading}</h1>
          <p>PEGASUS SAVINGS</p>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
