import { useState } from "react";
import "./App.css";
import CustomSelect from "./Components/CustomSelect/CustomSelect";
import Input from "./Components/Input/Input";
import InputUsername from "./Components/InputUsername/InputUsername";
import Results from "./Components/Results/Results";

const options = [
  { value: "flat", label: "Flat" },
  { value: "flat-square", label: "Flat-square" },
  { value: "plastic", label: "Plastic" },
  { value: "social", label: "Social" },
  { value: "for-the-badge", label: "For-the-badge" },
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
     {/* MainContainer__Title */}
      <h1 className="text-3xl text-indigo-600">Peerlist Readme Badge Generator</h1>
      {/* MainContainer__SubTitle */}
      <h1 className=" text-indigo-500 my-4 font-bold">For README.md</h1>
      <div className="FormContainer">
        <form onSubmit={onSubmit} autocomplete="off" >
          <Input label="Name" value={formState.nameValue} setFormState={setFormState} inputId="name" isRequired   />
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
              <span className="mx-4">Link to Peerlist profile</span>
            </label>
          </div>
          {isChecked && <InputUsername value={formState.peerlistUsername} setFormState={setFormState} />}
          <div className="FormContainer__ButtonWrapper">
            {/* FormContainer__Button */}
            <button className="bg-indigo-700 text-white w-full rounded-lg text-center h-10 my-10 hover:bg-indigo-500 text-lg cursor-pointer">Generate</button>
          </div>
        </form>
      </div>
      {isSubmitted && <Results badgeUrl={badgeUrl} linkProfile={linkProfile} isLinkToPeerlist={isChecked} />}
    </main>
  );
}

export default App;
