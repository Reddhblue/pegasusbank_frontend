import "./TransactionCards.scss";

const TransactionCards = (props) => {
  return (
    <div className="transactioncards">
      <div
        className={
          props.credit
            ? "credit transactioncards__status"
            : "debit transactioncards__status"
        }
      />
      <div className="transactioncards__info">
        <div className="transactioncards__info--datetime">
          <p>{props.date}</p>
          <p>{props.time}</p>
        </div>
        <div className={props.credit ? "credit-text" : "debit-text"}>
          ${props.amount}
        </div>
      </div>
      <div className="transactioncards__description">{props.description}</div>
    </div>
  );
};

export default TransactionCards;
