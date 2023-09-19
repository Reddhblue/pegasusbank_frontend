import "./DashboardForm.scss";

const DashboardForm = (props) => {
  return (
    <div className="dashboard__form">
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        readOnly={props.uneditable}
        value={props.value}
      />
    </div>
  );
};

export default DashboardForm;
