import { useContext, useEffect, useState } from "react";
import OverviewStats from "../../Dashboard Components/OverviewStats/OverviewStats";
import TransactionCards from "../../Dashboard Components/TransactionCards/TransactionCards";
import "./Overview.scss";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import formatTime from "../../lib/utils/formatTime";

const Overview = () => {
  const [account, setAccount] = useState();
  const [transactions, setTransactions] = useState([]);
  const { token } = useContext(AuthContext);

  const getAccountDetails = async () => {
    try {
      const { data } = await axios(`${BASE_URL}/account`, {
        headers: { Authorization: "Bearer " + token },
      });
      if (data.success) setAccount(data.account);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => console.log(account), [account]);

  const getTransactions = async () => {
    try {
      const { data } = await axios(`${BASE_URL}/transactions`, {
        headers: { Authorization: "Bearer " + token },
      });
      if (data.success) setTransactions(data.transactions);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAccountDetails();
    getTransactions();
  }, []);

  return (
    <div className="overview">
      <h2>BALANCE OVERVIEW</h2>
      <p className="overview__accnumber">
        Account Number: <span>{account?.account_number}</span>
      </p>
      <div className="overview__status">
        <OverviewStats
          header="AVAILABLE BALANCE"
          amount={`$ ${account?.balance?.toFixed(2)}`}
          // action="CHECKING"
          link="#"
        />
        <OverviewStats
          header="LEDGER BALANCE"
          amount={`$ ${account?.balance?.toFixed(2)}`}
          // action="REQUEST LOAN"
          link="#"
        />
        {transactions?.[0] && (
          <OverviewStats
            header="LAST TRANSACTION"
            amount={`$ ${transactions?.[0]?.amount}`}
            // action="VIEW STATEMENT"
            link="/dashboard/statement"
          />
        )}
      </div>

      <div className="overview__transactions">
        <h3>Transactions</h3>
        <div className="overview__transactions--card">
          {transactions?.map((value) => (
            <TransactionCards
              key={value.id}
              credit={value.transaction_type === "credit"}
              date={new Date(value.created_at).toLocaleDateString()}
              time={formatTime(new Date(value.created_at), ":", true)}
              amount={value.amount}
              description={value.description ?? "No description provided"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
