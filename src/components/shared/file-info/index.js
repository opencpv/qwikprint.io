import React from "react";
import useFileStore from "../../../stores/useFileStore";

const FileInfo = () => {
  const { getFileCount, getTotalSize, uploadedFiles } = useFileStore();
  if (uploadedFiles.length > 0) {
    return (
      <div>
        <p>Total files: {getFileCount()}</p>
        <p>Total size: {(getTotalSize() / 1024 / 1024).toFixed(2)} MB</p>
      </div>
    );
  }
  return null;
};

export default FileInfo;
