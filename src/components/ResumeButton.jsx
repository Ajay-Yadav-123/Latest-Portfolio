import { FaFileAlt } from "react-icons/fa";

export default function ResumeButton() {
  const handleResumeClick = () => {
    window.open("/files/myResume.pdf", "_blank"); // Opens PDF in a new tab
  };

  return (
    <button className="btn btn-secondary" onClick={handleResumeClick}>
      <FaFileAlt size={20} style={{ marginRight: "0.5em" }} />
      Resume
    </button>
  );
}
