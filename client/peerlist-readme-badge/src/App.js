import "./App.css";
import Input from "./Components/Input/Input";
import Select from "react-select";

const options = [
  { value: "flat", label: "flat" },
  { value: "flat-square", label: "flat-square" },
  { value: "plastic", label: "plastic" },
  { value: "social", label: "social" },
  { value: "for-the-badge", label: "for-the-badge" },
];

function App() {
  return (
    <main className="MainContainer">
      <h1 className="MainContainer__Title">Peerlist Readme Badge Generator</h1>
      <h1 className="MainContainer__SubTitle">for README.md</h1>
      <div className="FormContainer">
        <form>
          <Input label="Name" />
          <Select options={options} className="FormContainer__Select" />
          <button>Generate</button>
        </form>
      </div>
    </main>
  );
}

export default App;
