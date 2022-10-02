import CodeComponent from "../CodeComponent/CodeComponent";
import "../Results/Results.css";

const Results = ({ badgeUrl }) => {
  const badgeMdUrl = `![Peerlist](${badgeUrl})`;
  const htmlUrl = `<img src="${badgeUrl}" alt="Peerlist Badge" />`;

  return (
    <div className="ResultsContainer">
      <div className="ResultsContainer__ImageWrapper">
        <img src={badgeUrl} alt="badge" />
      </div>
      <CodeComponent label={"Markdown"} url={badgeMdUrl} />
      <CodeComponent label={"Html"} url={htmlUrl} />
    </div>
  );
};
export default Results;
