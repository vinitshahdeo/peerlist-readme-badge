import Select from "react-select";
import "../CustomSelect/CustomSelect.css";

const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "black",
    primary: "#a1a5a8",
    cursor:"pointer"
  },
});

const customStyles = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  control: (provided) => ({
    ...provided,
    border: 0,
    boxShadow: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#f6f8fa" : "white",
    color: state.isSelected ? "black" : "",
    "&:hover": {
      ...provided,
      backgroundColor: state.isSelected ? "#f6f8fa" : "#f6f8fa",
      color: state.isSelected ? "black" : "",
      cursor: "pointer",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 0,
  }),
};

const CustomSelect = ({ options, label, placeholder, onChange }) => {
  return (
    //  Your Class Name "SelectContainer"
    <div className="border-solid rounded-lg border-4  border-indigo-500/100 my-5">
      {/*  CSS Class name SelectContainer__Label */}
      <label className="font-extralight text-slate-400 px-2 ">{label}</label>
      <Select
        defaultValue={options[0]}
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        isSearchable={false}
        theme={customTheme}
        onChange={onChange}
        
      />
    </div>
  );
};
export default CustomSelect;
