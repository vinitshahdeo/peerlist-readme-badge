import "../Input/Input.css";

const Input = ({ label, value, inputId, onChange }) => {
  return (
    <div className="InputContainer">
      <label htmlFor={inputId} className="InputContainer__Label">
        {label}
      </label>
      <input
        id={inputId}
        placeholder=""
        value={value}
        onChange={onChange}
        className="InputContainer_Input"
      />
    </div>
  );
};
export default Input;
