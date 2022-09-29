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
    backgroundColor: state.isSelected ? "black" : "white",
    "&:hover": {
      ...provided,
      backgroundColor: state.isSelected ? "black" : "black",
      color: "white",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 0,
  }),
};

const CustomSelect = ({ options, label, placeholder }) => {
  return (
    <div className="SelectContainer">
      <label className="SelectContainer__Label">{label}</label>
      <Select
        defaultValue={options[0].value}
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        isSearchable={false}
        theme={customTheme}
      />
    </div>
  );
};
export default CustomSelect;
