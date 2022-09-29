import "./App.css";
import Input from "./Components/Input/Input";
import CustomSelect from "./Components/CustomSelect/CustomSelect";
import { useState } from "react";

const options = [
  { value: "flat", label: "flat" },
  { value: "flat-square", label: "flat-square" },
  { value: "plastic", label: "plastic" },
  { value: "social", label: "social" },
  { value: "for-the-badge", label: "for-the-badge" },
];

function App() {
  
  const [formState, setFormState] = useState({
    nameValue: "",
    selectValue: options[0].value,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <main className="MainContainer">
      <h1 className="MainContainer__Title">Peerlist Readme Badge Generator</h1>
      <h1 className="MainContainer__SubTitle">for README.md</h1>
      <div className="FormContainer">
        <form onSubmit={onSubmit}>
          <Input
            label="Name"
            value={formState.nameValue}
            setFormState={setFormState}
            inputId="name"
          />
          <CustomSelect
            label="Style"
            placeholder="Select"
            className="FormContainer__Select"
            setFormState={setFormState}
            options={options}
          />
          <div className="FormContainer__ButtonWrapper">
            <button className="FormContainer__Button">Generate</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
