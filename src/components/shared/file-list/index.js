import React from "react";
import getFileIcon from "../../../lib/customHooks/get-file-icon";
import { TbTrashFilled } from "react-icons/tb";

const FileList = ({ files, onRemove }) => {
  return (
    <div className="space-y-2">
      {files.map((file) => (
        <div
          key={file.id}
          className="flex items-center justify-between border-2 border-slate-800 p-3 rounded-lg gap-2"
        >
          <div className="flex items-center space-x-3">
            <div className="text-2xl text-gray-600">
              {getFileIcon(file.type)}
            </div>
            <div>
              <p className="font-semibold text-sm">{file.name}</p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <button
            onClick={() => onRemove(file.id)}
            className="text-red-500 border rounded-full flex items-center justify-center w-8 h-8 border-red-500 hover:text-red-700 transition-colors"
          >
            <TbTrashFilled className="text-xl" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FileList;
