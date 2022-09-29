import "../CodeComponent/CodeComponent.css";
import { AiFillCopy } from "react-icons/ai";

const CodeComponent = ({ label, url }) => {
  return (
    <div className="CodeComponentContainer">
      <h3>{label}</h3>
      <div className="CodeBlock">
        <pre>
          <div className="CodeBlock__Wrapper">
            <code>
              <div>{url}</div>
            </code>
            <div className="CodeBlock__ButtonWrapper">
              <AiFillCopy size={20} className="CodeBlock__Button" />
            </div>
          </div>
        </pre>
      </div>
    </div>
  );
};
export default CodeComponent;
