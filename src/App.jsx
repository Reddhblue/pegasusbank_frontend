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

import Transfer from "./DashboardPages/Transfer/Transfer";
import OwnAccountTransfer from "./DashboardPages/Transfer/TransferSubpages/OwnAccountTransfer/OwnAccountTransfer";
import TransferToSameBank from "./DashboardPages/Transfer/TransferSubpages/TransferToSameBank/TransferToSameBank";
import OtherBankTransfer from "./DashboardPages/Transfer/TransferSubpages/OtherBankTransfer/OtherBankTransfer";
import ForeignTransfer from "./DashboardPages/Transfer/TransferSubpages/ForeignTransfer/ForeignTransfer";

import FixedDeposit from "./DashboardPages/FixedDeposit/FixedDeposit";
import BankCards from "./DashboardPages/BankCards/BankCards";
import BankInvestment from "./DashboardPages/BankInvestment/BankInvestment";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
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

        <Route path="/dashboard/fixed-deposit" element={<FixedDeposit />} />
        <Route path="/dashboard/investments" element={<BankInvestment />} />
        <Route path="/dashboard/cards" element={<BankCards />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
