import { useState } from "react";
import "./App.css";
import CustomSelect from "./Components/CustomSelect/CustomSelect";
import Input from "./Components/Input/Input";
import InputUsername from "./Components/InputUsername/InputUsername";
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
  peerlistUsername: "",
};

function App() {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [badgeUrl, setBadgeUrl] = useState(
    `https://peerlist-readme-badge.herokuapp.com/api/${formState.nameValue}?style=${formState.selectValue}`
  );
  const [linkProfile, setLinkProfile] = useState(`https://peerlist.io/${formState.peerlistUsername}`);

  const onSubmit = (e) => {
    e.preventDefault();
    setBadgeUrl(
      (prev) =>
        (prev = `https://peerlist-readme-badge.herokuapp.com/api/${formState.nameValue}?style=${formState.selectValue}`)
    );
    if (isChecked) {
      setLinkProfile((prev) => (prev = `https://peerlist.io/${formState.peerlistUsername}`));
    }
    setIsSubmitted(true);
  };

  const onSelectValueChange = ({ value }) => {
    if (isSubmitted) {
      setBadgeUrl(`https://peerlist-readme-badge.herokuapp.com/api/${formState.nameValue}?style=${value}`);
    }
    setFormState((prev) => ({ ...prev, selectValue: value }));
  };

  return (
    <main className="MainContainer">
      <h1 className="MainContainer__Title">Peerlist Readme Badge Generator</h1>
      <h1 className="MainContainer__SubTitle">for README.md</h1>
      <div className="FormContainer">
        <form onSubmit={onSubmit}>
          <Input label="Name" value={formState.nameValue} setFormState={setFormState} inputId="name" isRequired />
          <CustomSelect
            label="Style"
            placeholder="Select"
            className="FormContainer__Select"
            onChange={onSelectValueChange}
            options={options}
          />
          <div className="FormContainer__CheckboxWrapper">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                className={isChecked ? "checked" : ""}
              />
              <span>Link to Peerlist profile</span>
            </label>
          </div>
          {isChecked && <InputUsername value={formState.peerlistUsername} setFormState={setFormState} />}
          <div className="FormContainer__ButtonWrapper">
            <button className="FormContainer__Button">Generate</button>
          </div>
        </form>
      </div>
      {isSubmitted && <Results badgeUrl={badgeUrl} linkProfile={linkProfile} isLinkToPeerlist={isChecked} />}
    </main>
  );
}

export default App;
