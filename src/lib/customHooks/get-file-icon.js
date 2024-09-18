import {
  FaFileAlt,
  FaFilePdf,
  FaFileImage,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileAudio,
  FaFileVideo,
  FaFileArchive,
  FaFileCode,
} from "react-icons/fa";

const getFileIcon = (fileType) => {
  switch (true) {
    case fileType.includes("pdf"):
      return <FaFilePdf />;
    case fileType.includes("image"):
      return <FaFileImage />;
    case fileType.includes("word"):
      return <FaFileWord />;
    case fileType.includes("sheet") || fileType.includes("excel"):
      return <FaFileExcel />;
    case fileType.includes("presentation") || fileType.includes("powerpoint"):
      return <FaFilePowerpoint />;
    case fileType.includes("audio"):
      return <FaFileAudio />;
    case fileType.includes("video"):
      return <FaFileVideo />;
    case fileType.includes("zip") || fileType.includes("archive"):
      return <FaFileArchive />;
    case fileType.includes("text") || fileType.includes("code"):
      return <FaFileCode />;
    default:
      return <FaFileAlt />;
  }
};

export default getFileIcon;
