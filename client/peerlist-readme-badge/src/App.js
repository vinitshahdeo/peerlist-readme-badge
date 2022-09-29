import "./App.css";
import Input from "./Components/Input/Input";
import CustomSelect from "./Components/CustomSelect/CustomSelect";
import { useState } from "react";
import Results from "./Components/Results/Results";

const options = [
  { value: "flat", label: "flat" },
  { value: "flat-square", label: "flat-square" },
  { value: "plastic", label: "plastic" },
  { value: "social", label: "social" },
  { value: "for-the-badge", label: "for-the-badge" },
];

const initialFormState = {
  nameValue: "",
  selectValue: options[0].value,
};

function App() {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [badgeUrl, setBadgeUrl] = useState(
    `https://peerlist-readme-badge.herokuapp.com/api/${formState.nameValue}?style=${formState.selectValue}`
  );

  const onSubmit = (e) => {
    e.preventDefault();
    setBadgeUrl(
      (prev) =>
        (prev = `https://peerlist-readme-badge.herokuapp.com/api/${formState.nameValue}?style=${formState.selectValue}`)
    );
    setIsSubmitted(true);
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
            isRequired
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
      {isSubmitted && <Results badgeUrl={badgeUrl} />}
    </main>
  );
}

export default App;
