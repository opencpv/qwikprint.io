import React, { useState } from "react";
// Remove react-pdf import
import { routes } from "../../routes/routes";
import PrintSettingsModal from "../../components/print-settings-modal";
import BackButton from "../../components/shared/back-button";
import Button from "../../components/shared/button";
import useFileStore from "../../stores/useFileStore";
import { useNavigate } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
// pdfjs
// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`; // Use a stable version

const PrintSetupPage = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigate = useNavigate();
  const [printSettings, setPrintSettings] = useState({
    copies: 1,
    orientation: "portrait",
    paperSize: "a4",
    colorMode: "color",
  });
  const { uploadedFiles, fileURLs, setFilePageNumber } = useFileStore();
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null); // Add state for error handling

  // Remove onDocumentLoadSuccess function
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setFilePageNumber(numPages);
  }

  const handlePrint = () => {
    console.log("Printing with settings:", printSettings);
    navigate(routes.payment);
    // Implement actual printing logic here
  };

  const goToPrevPage = () => setPageNumber((page) => Math.max(page - 1, 1));
  const goToNextPage = () =>
    setPageNumber((page) => Math.min(page + 1, numPages));

  return (
    <section className="w-full h-screen font-open-sans flex flex-col p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Print Setup</h1>
        <BackButton to={routes.uploadDocument} />
      </div>
      <div className="flex-1 flex flex-col ">
        <div className="w-full flex justify-center items-center ">
          {uploadedFiles.length > 0 && (
            <Document
              file={fileURLs[0]}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(err) => setError(err)} // Handle load errors
            >
              <Page
                pageNumber={pageNumber}
                width={window.innerWidth - 40} // Subtracting 40px for padding
                scale={1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          )}
          {error && (
            <p className="text-red-500">
              Error loading document: {error.message}
            </p>
          )}{" "}
        </div>
      </div>
      <div className="w-fill mb-2 text-center"></div>
      <div className="flex justify-between items-center gap-2 mb-2">
        <Button width="full" color="secondary" onClick={goToPrevPage}>
          Prev
        </Button>
        <p className="font-semibold text-lg">
          {pageNumber}/{numPages}
        </p>
        <Button width="full" color="accent" onClick={goToNextPage}>
          Next
        </Button>
      </div>
      <div className="flex flex-col gap-2 pb-2">
        <Button
          width="full"
          color="secondary"
          onClick={() => setIsSettingsOpen(true)}
        >
          Print Settings
        </Button>
        <Button width="full" color="primary" onClick={handlePrint}>
          Print
        </Button>
      </div>
      <PrintSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={printSettings}
        onSettingsChange={setPrintSettings}
      />
    </section>
  );
};

export default PrintSetupPage;
