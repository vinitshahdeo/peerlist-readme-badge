import "../CodeComponent/CodeComponent.css";
import { AiFillCopy, AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";

const CodeComponent = ({ label, url }) => {
  const [isCopied, setisCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const copyOnClick = () => {
    copyTextToClipboard(url);
    setisCopied(true);
    setTimeout(() => setisCopied(false), 2500);
  };

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
              {isCopied ? (
                <AiOutlineCheck size={20} className="CodeBlock__Button" />
              ) : (
                <AiFillCopy
                  size={20}
                  className="CodeBlock__Button"
                  onClick={copyOnClick}
                />
              )}
            </div>
          </div>
        </pre>
      </div>
    </div>
  );
};
export default CodeComponent;
