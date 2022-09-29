import Select from "react-select";
import "../CustomSelect/CustomSelect.css";

const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "black",
    primary: "#a1a5a8",
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

const CustomSelect = ({ options, label, placeholder, setFormState }) => {
  return (
    <div className="SelectContainer">
      <label className="SelectContainer__Label">{label}</label>
      <Select
        defaultValue={options[0]}
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        isSearchable={false}
        theme={customTheme}
        onChange={({ value }) => {
          setFormState((prev) => ({ ...prev, selectValue: value }));
        }}
      />
    </div>
  );
};
export default CustomSelect;
