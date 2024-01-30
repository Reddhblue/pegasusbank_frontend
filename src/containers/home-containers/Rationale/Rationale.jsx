import StyledNumber from "../../../components/StyledNumber/StyledNumber";
import "./Rationale.scss";

const Rationale = () => {
  return (
    <div className="background__rationale">
      <div className="enclosure rationale">
        <h2>Why Pegasus savings</h2>
        <div className="rationale__contents">
          <div>
            <StyledNumber number="1" />
            <h3>Purpose-built challenger</h3>
            <p>
              Challenging the status quo to give SMEs a fairer go when it comes
              to banking.
            </p>
          </div>
          <div>
            <StyledNumber number="2" />
            <h3>Focus on relationships</h3>
            <p>Banking as it used to be, Banking as it should be.</p>
          </div>
          <div>
            <StyledNumber number="3" />
            <h3>Built to say 'yes', faster</h3>
            <p>
              Purpose-built to make it easier for your business to get the
              funding you need, when you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rationale;
