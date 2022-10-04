import CodeComponent from "../CodeComponent/CodeComponent";
import "../Results/Results.css";

const Results = ({ badgeUrl, linkProfile, isLinkToPeerlist }) => {
  const badgeMdUrl = `![Peerlist](${badgeUrl})`;
  const badgeMdUrlLink = `[![Peerlist](${badgeUrl})](${linkProfile})`;
  const htmlUrl = `<img src="${badgeUrl}" alt="Peerlist Badge" />`;

  return (
    <div className="ResultsContainer">
      <div className="ResultsContainer__ImageWrapper">
        <img src={badgeUrl} alt="badge" />
      </div>
      <CodeComponent label={"Markdown"} url={isLinkToPeerlist ? badgeMdUrlLink : badgeMdUrl} />
      <CodeComponent label={"Html"} url={htmlUrl} />
    </div>
  );
};
export default Results;
