import { CgPrinter } from "react-icons/cg";
import BackButton from "../../components/shared/back-button";
import { routes } from "../../routes/routes";
import usePrinterConfigStore from "../../stores/usePrinterConfigStore";
import PrinterCard from "../../components/pages/location-page/printer-selection/printer-card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/shared/button";

const PrinterSelectionPage = () => {
  const { selectedSite } = usePrinterConfigStore();
  const navigate = useNavigate();
  const printers = [
    {
      icon: CgPrinter,
      name: "Raptor x2o11 Full boost - 1",
      status: "Available",
      id: 1,
    },
    {
      icon: CgPrinter,
      name: "Hp laser jet printer",
      status: "Available",
    },
    {
      icon: CgPrinter,
      name: "Raptor x2o11 Full boost - 2",
      status: "Not available",
      id: 3,
    },
  ];

  useEffect(() => {
    if (!selectedSite) {
      navigate(routes.locations);
    }
  }, [navigate, selectedSite]);
  return (
    <main className="w-full h-screen font-open-sans  flex flex-col gap-2 ">
      <div className="w-full text-lg font-bold text-slate-800 text-center ">
        <div className="flex justify-between px-5 items-center">
          <h1 className=" py-4">Select printer </h1>
          <BackButton to={routes.locations} />
        </div>
        <div className="w-full h-[1px] bg-slate-800"></div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <p className="px-3 text-[10px] py-2 rounded-full bg-blue-500 text-white w-fit h-fit font-black mb-5">
          {selectedSite}
        </p>
        <ul className="flex flex-col gap-3">
          {printers.map((printer, index) => (
            <li key={index}>
              <PrinterCard
                icon={printer.icon}
                name={printer.name}
                status={printer.status}
                id={printer.id}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5">
        <Button
          width="full"
          onClick={() => {
            navigate(routes.uploadDocument);
          }}
        >
          Confirm
        </Button>
      </div>
    </main>
  );
};
export default PrinterSelectionPage;
