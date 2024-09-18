import React, { useRef } from "react";
import { GrDocumentCloud } from "react-icons/gr";
import useFileStore from "../../../stores/useFileStore";

const FileSelect = ({ maxSize = 10, acceptedTypes = [".pdf"] }) => {
  const fileInputRef = useRef(null);
  const { addFile } = useFileStore();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (
        file.size <= maxSize * 1024 * 1024 &&
        acceptedTypes.includes(`.${file.name.split(".").pop()}`)
      ) {
        addFile(file);
      } else {
        alert(
          `Please select a ${acceptedTypes.join(", ")} file under ${maxSize}MB.`
        );
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (
        file.size <= maxSize * 1024 * 1024 &&
        acceptedTypes.includes(`.${file.name.split(".").pop()}`)
      ) {
        addFile(file);
      } else {
        alert(
          `Please select a ${acceptedTypes.join(", ")} file under ${maxSize}MB.`
        );
      }
    }
  };

  return (
    <div
      className="w-full h-32 border-2 rounded-lg border-dashed border-slate-800 flex-col flex items-center justify-center cursor-pointer"
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <GrDocumentCloud className="text-slate-800 text-3xl" />
      <div className="text-center">
        <p className="text-slate-800 text-[10px]">
          Click to upload or drag and drop (Only {acceptedTypes.join(", ")})
        </p>
        <p className="text-slate-800 text-[10px] -mt-1">
          Maximum file size: {maxSize}MB
        </p>
      </div>
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={acceptedTypes.join(",")}
      />
    </div>
  );
};

export default FileSelect;
