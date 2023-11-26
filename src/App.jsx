import Home from "./pages/Home/Home";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import Solutions from "./pages/Solutions/Solutions";
import FraudPrevention from "./pages/FraudPrevention/FraudPrevention";
import PersonalAccount from "./pages/PersonalAccount/PersonalAccount";
import RetirementAccount from "./pages/RetirementAccount/RetirementAccount";
import SavingsAccount from "./pages/SavingsAccount/SavingsAccount";
import ContactUs from "./pages/ContactUS/ContactUs";
import Forex from "./pages/Forex/Forex";
import Sma from "./pages/SMA/Sma";
import Aviation from "./pages/Aviation/Aviation";
import Investment from "./pages/Investment/Investment";

import ErrorPage from "./components/ErrorPage/ErrorPage";

import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import SignUp from "./pages/SignUp/SignUp";

import Dashboard from "./pages/Dashboard/Dashboard";
import Overview from "./DashboardPages/Overview/Overview";

import AccountInfo from "./DashboardPages/AccountInfo/AccountInfo";
import UpdateAccountInfo from "./DashboardPages/UpdateAccountInfo/UpdateAccountInfo";

import Transfer from "./DashboardPages/Transfer/Transfer";
import OwnAccountTransfer from "./DashboardPages/Transfer/TransferSubpages/OwnAccountTransfer/OwnAccountTransfer";
import TransferToSameBank from "./DashboardPages/Transfer/TransferSubpages/TransferToSameBank/TransferToSameBank";
import OtherBankTransfer from "./DashboardPages/Transfer/TransferSubpages/OtherBankTransfer/OtherBankTransfer";
import ForeignTransfer from "./DashboardPages/Transfer/TransferSubpages/ForeignTransfer/ForeignTransfer";

import BankInvestment from "./DashboardPages/BankInvestment/BankInvestment";
import NewDeposit from "./DashboardPages/BankInvestment/BankInvestmentSubpages/NewDeposit/NewDeposit";
import WithdrawInterest from "./DashboardPages/BankInvestment/BankInvestmentSubpages/WithdrawIntrerest/WithdrawInterest";

import Statement from "./DashboardPages/Statement/Statement";

import BankCards from "./DashboardPages/BankCards/BankCards";
import RequestCard from "./DashboardPages/BankCards/BankCardsSubpages/RequestCard/RequestCard";
import CreditCard from "./DashboardPages/BankCards/BankCardsSubpages/CreditCard/CreditCard";
import DebitCard from "./DashboardPages/BankCards/BankCardsSubpages/DebitCard/DebitCard";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<WhoWeAre />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/fraudprevention" element={<FraudPrevention />} />
      <Route path="/personalaccount" element={<PersonalAccount />} />
      <Route path="/retirementaccount" element={<RetirementAccount />} />
      <Route path="/savingsaccount" element={<SavingsAccount />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/forex" element={<Forex />} />
      <Route path="/sma" element={<Sma />} />
      <Route path="/aviation" element={<Aviation />} />
      <Route path="/investment" element={<Investment />} />

      <Route path="/login" element={<Login />} />
      <Route path="/recoverpassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/account-info" element={<AccountInfo />} />
        <Route
          path="/dashboard/update-account-info"
          element={<UpdateAccountInfo />}
        />

        <Route path="/dashboard/transfer" element={<Transfer />}>
          <Route
            path="/dashboard/transfer/own-account"
            element={<OwnAccountTransfer />}
          />
          <Route
            path="/dashboard/transfer/same-bank"
            element={<TransferToSameBank />}
          />
          <Route
            path="/dashboard/transfer/other-bank"
            element={<OtherBankTransfer />}
          />
          <Route
            path="/dashboard/transfer/foreign"
            element={<ForeignTransfer />}
          />
        </Route>

        <Route path="/dashboard/investments" element={<BankInvestment />}>
          <Route
            path="/dashboard/investments/new-deposit"
            element={<NewDeposit />}
          />
          <Route
            path="/dashboard/investments/withdrawal"
            element={<WithdrawInterest />}
          />
        </Route>

        <Route path="/dashboard/statement" element={<Statement />} />

        <Route path="/dashboard/cards" element={<BankCards />}>
          <Route
            path="/dashboard/cards/request-card"
            element={<RequestCard />}
          />
          <Route path="/dashboard/cards/credit-card" element={<CreditCard />} />
          <Route path="/dashboard/cards/debit-card" element={<DebitCard />} />
        </Route>
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
