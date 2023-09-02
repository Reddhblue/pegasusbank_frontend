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

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
