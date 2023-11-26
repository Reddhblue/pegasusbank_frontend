import { Fragment } from "react";
import "./FormInputWithLabel.scss";

const FormInputWithLabel = (props) => {
  return (
    <Fragment>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        required={props.required}
      />
    </Fragment>
  );
};

export default FormInputWithLabel;
