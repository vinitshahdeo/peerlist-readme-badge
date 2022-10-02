import "../Input/Input.css";

const Input = ({ label, value, inputId, setFormState ,isRequired}) => {
  return (
    <div className="InputContainer">
      <label htmlFor={inputId} className="InputContainer__Label">
        {label}
      </label>
      <input
        id={inputId}
        placeholder=""
        value={value}
        onChange={(e) =>
          setFormState((prev) => ({ ...prev, nameValue: e.target.value }))
        }
        className="InputContainer_Input"
        required={isRequired}
      />
    </div>
  );
};
export default Input;
