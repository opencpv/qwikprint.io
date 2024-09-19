import React from "react";
import usePrinterConfigStore from "../../../../../stores/usePrinterConfigStore";

const PrinterCard = ({ icon: Icon, name, status, id }) => {
  const { printerConfig, setPrinterModel } = usePrinterConfigStore((state) => ({
    printerConfig: state.printerConfig,
    setPrinterModel: state.setPrinterModel,
  }));

  const isSelected = printerConfig.model === name;

  const handleClick = () => {
    setPrinterModel(name);
  };

  return (
    <div
      className={`w-full flex flex-col items-end rounded-lg cursor-pointer  p-5 transition-all duration-300
        ${
          isSelected
            ? "bg-green-500 border-green-500 border-2 text-white"
            : "border-2 border-slate-800 text-slate-800 hover:bg-green-400"
        }`}
      onClick={handleClick}
    >
      <div className="flex gap-2 w-full items-center">
        <Icon
          className={`text-3xl ${isSelected ? "text-white" : "text-slate-800"}`}
        />
        <p className="font-semibold truncate">{name}</p>
      </div>
      <p
        className={`text-right text-[10px] text-white px-3 py-1 w-fit rounded-full ${
          status === "Available" ? "bg-slate-800" : "bg-red-500"
        }`}
      >
        {status}
      </p>
    </div>
  );
};

export default PrinterCard;
