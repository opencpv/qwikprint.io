import Lottie from "react-lottie";
import useAssets from "../../lib/customHooks/useAssets";
import Button from "../../components/shared/button";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";

const SuccessPage = () => {
  const { lottie } = useAssets();
  const navigate = useNavigate();
  return (
    <main className="w-full h-[100vh] p-5">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-[50vh] ml-28">
          <Lottie options={{ animationData: lottie.congrats, loop: true }} />
        </div>
        <p className="text-2xl font-bold text-center">
          Thank you for using Qwikprint.io
        </p>
        <Button
          className="w-full bg-green-500 font-bold text-white py-3 px-4 rounded-md mt-5"
          onClick={() => navigate(routes.hompeage)}
        >
          Go Home
        </Button>
      </div>
    </main>
  );
};

export default SuccessPage;
