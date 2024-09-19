import React from "react";
import { useNavigate } from "react-router-dom";
import useFileStore from "../../stores/useFileStore";
import Button from "../../components/shared/button";
import { routes } from "../../routes/routes";
import usePrinterConfigStore from "../../stores/usePrinterConfigStore";
// import { usePaystackPayment } from "react-paystack";
// import { v4 as uuidv4 } from "uuid"; // Add this import at the top
import { PaystackButton } from "react-paystack";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { uploadedFiles, filePageNumber } = useFileStore();
  const { printerConfig } = usePrinterConfigStore();
  const calculateTotalCost = () => {
    return (
      filePageNumber *
      printerConfig.copies *
      printerConfig.costPerPage
    ).toFixed(2);
  };

  // const config = {
  //   reference: uuidv4(),
  //   email: "elvis@gmail.com", // Replace with actual user email
  //   amount: calculateTotalCost() * 100, // Convert to pesewas
  //   publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,

  //   currency: "GHS",
  // };

  const onSuccess = (reference) => {
    console.log("Payment successful", reference);

    // Make API request to print file
    fetch("http://localhost:5000/print", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filename: uploadedFiles[0].name,
        printerName: printerConfig.model,
      }), // Send the payment reference
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Print request successful", data);
        navigate(routes.success);
      })
      .catch((error) => {
        console.error("Error printing file:", error);
      });
  };

  const onClose = () => {
    console.log("Payment window closed");
  };

  // const initializePayment = usePaystackPayment(config);

  // const handlePayment = () => {
  //   initializePayment(onSuccess, onClose); // Ensure onSuccess and onClose are passed correctly
  // };

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
            <PaystackButton
              text="Pay now"
              className="w-full bg-blue-400 text-white font-semibold py-3 rounded-lg transition duration-300"
              currency="ghs"
              email={`user${Math.floor(Math.random() * 1000)}@gmail.com`} // Use a random user email
              amount={calculateTotalCost() * 100} // Use the calculated amount
              publicKey={process.env.REACT_APP_PAYSTACK_PUBLIC_KEY} // Use the public key from environment variables
              onSuccess={onSuccess} // Use the onSuccess function defined earlier
              onClose={onClose} // Use the onClose function defined earlier
            />
            {/* <Button
              color="primary"
              className="w-full bg-blue-400  text-white font-semibold py-3 rounded-lg transition duration-300"
              onClick={handlePayment}
            >
              Pay Now
            </Button> */}
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
