import Lottie from "react-lottie";
import useAssets from "../../lib/customHooks/useAssets";
import Button from "../../components/shared/button";
import DefaultPageLayout from "../../components/layouts/default-page-layout";
import { useNavigate } from "react-router-dom";
import { siteRoutes } from "../../routes";

const HomePage = () => {
  const { lottie } = useAssets();
  const navigate = useNavigate();
  return (
    <DefaultPageLayout>
      <h1 className="text-3xl font-bold  text-center text-green-500">
        qwikprint.io
      </h1>
      <div className="w-full aspect-square pl-10">
        <Lottie options={{ animationData: lottie.printer }} />
      </div>

      <div className="flex flex-col items-center w-full flex-1 justify-between">
        <div>
          <p className="text-center text-green-500  mt-2 font-semibold">
            Printing made easy. Anytime. Anywhere.
          </p>
          <p className="text-center  text-sm  mt-2 ">
            Access our self-service kiosk to print your documents. Remotely or
            on site.
          </p>
        </div>
        <Button
          width="full"
          size="medium"
          onClick={() => navigate(siteRoutes.locations)}
        >
          Get Started
        </Button>
      </div>
    </DefaultPageLayout>
  );
};

export default HomePage;
