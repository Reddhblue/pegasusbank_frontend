import { Fragment } from "react";
import "./FormInputWithLabel.scss";

const FormInputWithLabel = (props) => {
  return (
    <Fragment>
      <label>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </Fragment>
  );
};

export default FormInputWithLabel;
