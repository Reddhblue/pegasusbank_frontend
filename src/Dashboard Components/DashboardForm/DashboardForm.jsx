import "./DashboardForm.scss";

const DashboardForm = (props) => {
  return (
    <div className="dashboard__form">
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    </div>
  );
};

export default DashboardForm;
