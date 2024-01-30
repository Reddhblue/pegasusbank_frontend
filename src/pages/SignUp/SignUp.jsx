import "./SignUp.scss";

import { NavLink, useNavigate } from "react-router-dom";
import FormInputWithLabel from "../../components/FormInputWithLabel/FormInputWithLabel";
import CountrySelector from "../../components/CountrySelector/CountrySelector";
import { useState, useContext, useEffect } from "react";
import { ErrorContext } from "../../context/errors";
import useForm from "../../custom_hooks/useForm";
import { BASE_URL } from "../../constants";

const SignUp = () => {
  const { setError } = useContext(ErrorContext);
  const navigate = useNavigate();

  const [formData, updateField, register, isLoading, formResponse, formError] =
    useForm({
      formData: {
        firstname: "",
        lastname: "",
        email: "",
        DOB: "",
        SSN: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        street: "",
        id_type: "",
        id_number: "",
        id_date_issued: "",
        id_date_expires: "",
        gender: "",
        income_source: "",
        account_type: "",
        currency: "",
        password: "",
        confirm_password: "",
        isUsCitizen: 0,
        tax_id: null,
        image: null,
      },
      submitOptions: {
        method: "POST",
        url: `${BASE_URL}/auth/signup`,
        form_type: "multipart/form-data",
      },
    });

  useEffect(() => {
    if (!formResponse) return;
    console.log(formResponse);
    if (formResponse.success) navigate("/login");
  }, [formResponse]);

  useEffect(() => {
    if (formError) setError({ message: formError?.message, show: true });
  }, [formError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password)
      return setError({ message: "Passwords don't match", show: true });
    register();
  };

  useEffect(() => {
    console.log(formData);
    if (formData.isUsCitizen == 1 && formData.country !== "United States")
      updateField("country", "United States");
  }, [formData]);

  return (
    <div className="signup">
      <NavLink to="/" className="logo">
        <img src="/assets/pegasuslogo.png" alt="logo" />
      </NavLink>

      <form action="" className="signup__form" onSubmit={handleSubmit}>
        <h2>Onboarding</h2>

        {/* <!-- location option --> */}
        <div>
          <div>
            <label>Are You A USA Citizen?</label>
            <select
              className="select"
              value={formData.isUsCitizen}
              name="isUsCitizen"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            >
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>
        </div>

        {/*  first Name & Last Name --> */}
        <div className="flex-container ">
          <div>
            <FormInputWithLabel
              label="First Name"
              type="text"
              placeholder="First Name"
              value={formData.firstname}
              name="firstname"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          </div>

          <div>
            <FormInputWithLabel
              label="Last Name"
              type="text"
              placeholder="Last Name"
              value={formData.lastname}
              name="lastname"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          </div>
        </div>

        {/* <!-- Date of birth and Social security number --> */}
        <div className="flex-container">
          <div>
            <FormInputWithLabel
              label="Date of Birth"
              type="date"
              value={formData.DOB}
              name="DOB"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          </div>

          {/* Conditionally render Social security number or Tax ID */}
          {formData.isUsCitizen ? (
            <div>
              <FormInputWithLabel
                label="Social Security No"
                type="text"
                placeholder="SSN-XXX-XX-XXXX"
                value={formData.SSN}
                name="SSN"
                onChange={(e) => updateField(e.target.name, e.target.value)}
                // required
              />
            </div>
          ) : (
            <div>
              <FormInputWithLabel
                label="Tax ID (optional)"
                type="text"
                placeholder="Tax ID"
                value={formData.tax_id}
                name="tax_id"
                onChange={(e) => updateField(e.target.name, e.target.value)}
              />
            </div>
          )}
        </div>

        {/* <!-- Email & Mobile --> */}
        <div className="flex-container">
          <div>
            <FormInputWithLabel
              label="Email"
              type="email"
              placeholder="Example@domain.com"
              value={formData.email}
              name="email"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          </div>

          <div>
            <FormInputWithLabel
              label="Mobile"
              type="tel"
              placeholder="+1(324)-882-0034"
              value={formData.phone}
              name="phone"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          </div>
        </div>

        {/* <!-- Country & State --> */}
        <div className="flex-container">
          {/* COUNRTY SELECTOR */}
          {formData.isUsCitizen == "1" ? (
            <></>
          ) : (
            <CountrySelector
              value={formData.country}
              name="country"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          )}

          <div>
            <FormInputWithLabel
              label="State"
              type="text"
              placeholder="State"
              value={formData.state}
              name="state"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          </div>
        </div>

        {/* <!-- City & Street Address --> */}
        <div className="flex-container">
          <div>
            <FormInputWithLabel
              label="City"
              type="text"
              placeholder="City"
              value={formData.city}
              name="city"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          </div>

          <div>
            <FormInputWithLabel
              label="Street Address"
              type="text"
              placeholder="Address"
              value={formData.street}
              name="street"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          </div>
        </div>

        {/* <!-- Verification & ID --> */}
        <div className="flex-container">
          <div>
            <label>Verification</label>
            <select
              className="select"
              value={formData.id_type}
              name="id_type"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            >
              <option value="">Valid ID Type</option>
              <option value="driver's licence">Driver's Licence</option>
              <option value="international passport">
                International Passport
              </option>
              <option value="national id">National ID</option>
            </select>
          </div>

          <div>
            <FormInputWithLabel
              label="ID Number"
              type="text"
              placeholder="ID Number"
              value={formData.id_number}
              name="id_number"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          </div>
        </div>

        {/* <!-- Date Issued & Expiry Date --> */}
        <div className="flex-container">
          <div>
            <FormInputWithLabel
              label="Date Issued"
              type="date"
              value={formData.id_date_issued}
              name="id_date_issued"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          </div>

          <div>
            <FormInputWithLabel
              label="Expiry Date"
              type="date"
              value={formData.id_date_expires}
              name="id_date_expires"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          </div>
        </div>

        {/* <!-- Gender & Source Of Income --> */}
        <div className="flex-container">
          <div>
            <label>Gender</label>
            <select
              className="select"
              value={formData.gender}
              name="gender"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            >
              <option value="">Please Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label>Source Of Income</label>
            <select
              className="select"
              value={formData.income_source}
              name="income_source"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            >
              <option value="">Select Income Source</option>
              <option value="employment income">Employment Income</option>
              <option value="inheritance">Inheritance</option>
              <option value="life insurance">Life Insurance</option>
              <option value="sale of company">Sale of Company</option>
              <option value="sale of investments">Sale of Investments</option>
              <option value="sale of property">Sale of property</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* <!-- Account Type & Currency --> */}
        <div className="flex-container">
          <div>
            <label>Account Type</label>
            <select
              className="select"
              value={formData.account_type}
              name="account_type"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            >
              <option value="">Account Type</option>
              <option value="checking account">Checking Account</option>
              <option value="savings account">Savings Account</option>
              <option value="mortgages">Mortgages</option>
              <option value="businesses">Business</option>
            </select>
          </div>

          <div>
            <label>Currency</label>
            <select
              className="select"
              value={formData.currency}
              name="currency"
              onChange={(e) => updateField(e.target.name, e.target.value)}
            >
              <option value="">Please Select</option>
              <option value="US Dollar">US Dollar</option>
              <option value="Canadian Dollar">Canadian Dollar</option>
              <option value="Pound">Pound</option>
              <option value="Euro">Euro</option>
              <option value="Chinese Yuan">Chinese Yuan</option>
              <option value="Hongkong Dollar">Hongkong Dollar</option>
              <option value="Thai Baht">Thai Baht</option>
              <option value="Lira">Lira</option>
            </select>
          </div>
        </div>

        {/* <!-- Password --> */}
        <div className="flex-container">
          <div>
            <FormInputWithLabel
              label="Password"
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              name="password"
              onChange={(e) => updateField(e.target.name, e.target.value)}
              required
            />
          </div>

          <div>
            <FormInputWithLabel
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              name="confirm_password"
              onChange={(e) => updateField(e.target.name, e.target.value)}
            />
          </div>
        </div>

        {/* <!-- Passport --> */}
        <div>
          <div>
            <FormInputWithLabel
              label="Passport Photo"
              type="file"
              // value={formData.image}
              name="image"
              onChange={(e) => updateField(e.target.name, e.target.files[0])}
              required
            />
          </div>
        </div>

        {/* <!-- Submit Button --> */}
        {/* <div className="signup__form--submit"> */}
        <button type="submit" className="signup__form--submit">
          Process Information
        </button>
        {/* </div> */}

        {/* <!-- Open a New Account --> */}
        <div className="sign_in">
          Already have an account?
          <NavLink to="/login"> Login</NavLink>
        </div>
      </form>

      {/* LOGIN FORM */}
    </div>
  );
};

export default SignUp;
