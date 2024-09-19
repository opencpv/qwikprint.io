import HomePage from "../pages/homepage";
import LocationsPage from "../pages/locations";
import PaymentPage from "../pages/payment";
import PrintSetupPage from "../pages/print-setup";
import PrinterSelectionPage from "../pages/printer-selection";
import SuccessPage from "../pages/success";
import UploadDocumentPage from "../pages/upload-document";
import { routes } from "./routes";

export const routeObjects = [
  { path: "/", element: <HomePage /> },
  { path: "/locations", element: <LocationsPage /> },
  { path: "/printer-selection", element: <PrinterSelectionPage /> },
  { path: "/upload-document", element: <UploadDocumentPage /> },
  { path: "/print-setup", element: <PrintSetupPage /> },
  { path: "/payment", element: <PaymentPage /> },
  { path: "/success", element: <SuccessPage /> },
];
export const siteRoutes = routes;
