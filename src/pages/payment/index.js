import React from "react";
import { useNavigate } from "react-router-dom";
import useFileStore from "../../stores/useFileStore";
import Button from "../../components/shared/button";
import { routes } from "../../routes/routes";
import usePrinterConfigStore from "../../stores/usePrinterConfigStore";
import { usePaystackPayment } from "react-paystack";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { uploadedFiles } = useFileStore();
  const { printerConfig } = usePrinterConfigStore();

  const calculateTotalCost = () => {
    const totalPages = uploadedFiles.reduce((sum, file) => sum + file.pages, 0);
    return (
      totalPages *
      printerConfig.copies *
      printerConfig.costPerPage
    ).toFixed(2);
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: "elvis@gmail.com", // Replace with actual user email
    amount: 20000, // Convert to pesewas
    publicKey: "pk_test_8d4d7fd91874cc76ea04ef4d76fb3c346dc593dd",
    currency: "GHS",
  };

  const onSuccess = (reference) => {
    console.log("Payment successful", reference);
    navigate(routes.confirmationPage);
  };

  const onClose = () => {
    console.log("Payment window closed");
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    initializePayment(onSuccess, onClose);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Payment</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Order Summary
          </h2>
          <div className="space-y-3 mb-6">
            <p className="text-gray-600">
              Number of files:{" "}
              <span className="font-medium text-gray-800">
                {uploadedFiles.length}
              </span>
            </p>
            <p className="text-gray-600">
              Copies:{" "}
              <span className="font-medium text-gray-800">
                {printerConfig.copies}
              </span>
            </p>
            <p className="text-gray-600">
              Paper size:{" "}
              <span className="font-medium text-gray-800">
                {printerConfig.paperSize}
              </span>
            </p>
            <p className="text-gray-600">
              Color mode:{" "}
              <span className="font-medium text-gray-800">
                {printerConfig.colorMode}
              </span>
            </p>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-8">
            Total Cost:{" "}
            <span className="text-green-600">₵{calculateTotalCost()}</span>
          </div>
          <div className="space-y-4">
            <Button
              onClick={handlePayment}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Pay Now
            </Button>
            <Button
              onClick={() => navigate(routes.printSetup)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition duration-300"
            >
              Back to Print Setup
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
