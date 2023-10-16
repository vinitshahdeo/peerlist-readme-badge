import "../Input/Input.css";

const Input = ({ label, value, inputId, setFormState ,isRequired}) => {
  return (
    // Original CSS Class Name "InputContainer"
    <div className="border-solid rounded-lg border-4 border-indigo-500/100">
      {/* Your  Css Class "InputContainer__Label"  */}
      <label htmlFor={inputId} className=" font-extralight text-slate-400 px-2 ">
        {label}
      </label>
      <input
        id={inputId}
        placeholder=""
        value={value}
        onChange={(e) =>
          setFormState((prev) => ({ ...prev, nameValue: e.target.value }))
        }
        className="InputContainer_Input  "
        required={isRequired}
      />
    </div>
  );
};
export default Input;
