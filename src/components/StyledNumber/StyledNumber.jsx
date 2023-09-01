import "./StyledNumber.scss";

const StyledNumber = (props) => {
  return (
    <div className="circle-container">
      <span className="number">{props.number}</span>
    </div>
  );
};

export default StyledNumber;
