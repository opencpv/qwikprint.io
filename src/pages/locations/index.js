import { GiAbstract010, GiAbstract021, GiAbstract035 } from "react-icons/gi";
import LocationCard from "../../components/pages/location-page/location-card";
import usePrinterConfigStore from "../../stores/usePrinterConfigStore";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
// import { IoIosArrowBack } from "react-icons/io";
import BackButton from "../../components/shared/back-button";
const LocationsPage = () => {
  const setSelectedSite = usePrinterConfigStore(
    (state) => state.setSelectedSite
  );
  const navigate = useNavigate();
  const locations = [
    {
      icon: GiAbstract010,
      name: "Alpha Site",
    },
    {
      icon: GiAbstract021,
      name: "Beta Site",
    },
    {
      icon: GiAbstract035,
      name: "Gamma Site",
    },
  ];
  return (
    <main className="w-full h-screen font-open-sans  flex flex-col gap-2 ">
      <div className="w-full text-lg font-bold text-slate-800 text-center ">
        <div className="flex justify-between px-5 items-center">
          <h1 className=" py-4">Select on-site location </h1>
          <BackButton to={routes.hompeage} />
        </div>
        <div className="w-full h-[2px] bg-slate-800"></div>
      </div>
      <div className="flex flex-1 p-5">
        <div className="grid grid-cols-2 gap-5 h-fit w-full">
          {locations.map((location) => (
            <LocationCard
              key={location.name}
              icon={location.icon}
              name={location.name}
              onClick={() => {
                setSelectedSite(location.name);
                navigate(routes.printerSelection);
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default LocationsPage;
