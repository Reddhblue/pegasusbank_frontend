import OverviewStats from "../../Dashboard Components/OverviewStats/OverviewStats";
import TransactionCards from "../../Dashboard Components/TransactionCards/TransactionCards";
import "./Overview.scss";

const values = [
  {
    id: "transaction-1",
    date: "15/09/2023",
    time: "04:45:04",
    amount: 15000,
    credit: false,
    description:
      "MC Loc Web Prch - ZEN015079328 -- 1XBET/3109351260 PSTK IKEJA",
  },
  {
    id: "transaction-2",
    date: "14/09/2023",
    time: "12:45:57",
    amount: 100000,
    credit: true,
    description:
      "NIP/GTG/HYDROJUMP UK. LTD-OPERATIONSHYDROJUMP / WEST Sept.Transport Subsidy 24 WEST",
  },
];

const Overview = () => {
  return (
    <div className="overview">
      <h2>BALANCE OVERVIEW</h2>
      <p className="overview__accnumber">
        Account Number: <span>3219855563</span>
      </p>
      <div className="overview__status">
        <OverviewStats
          header="AVAILABLE BALANCE"
          amount="$ 101,500.00"
          action="CHECKING"
          link="#"
        />
        <OverviewStats
          header="LEDGER BALANCE"
          amount="$ 110,245.00"
          action="REQUEST LOAN"
          link="#"
        />
        <OverviewStats
          header="LAST TRANSACTION"
          amount="$ 300,000.00"
          action="VIEW STATEMENT"
          link="/dashboard/statement"
        />
      </div>

      <div className="overview__transactions">
        <h3>Transactions</h3>
        <div className="overview__transactions--card">
          {values.map((value) => (
            <TransactionCards
              key={value.id}
              credit={value.credit}
              date={value.date}
              time={value.time}
              amount={value.amount}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
