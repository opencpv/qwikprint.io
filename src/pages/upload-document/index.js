import BackButton from "../../components/shared/back-button";
import { routes } from "../../routes/routes";
import FileSelect from "../../components/shared/file-select";
import Button from "../../components/shared/button";
import useFileStore from "../../stores/useFileStore";
import FileList from "../../components/shared/file-list";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { siteRoutes } from "../../routes";

const UploadDocumentPage = () => {
  const { uploadedFiles, removeFile, addFileURL } = useFileStore(); // Add addFileUrl
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleUpload = async () => {
    setLoading(true);
    try {
      setLoading(() => true);
      const formData = new FormData();
      formData.append("sampleFile", uploadedFiles[0]);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = response.data;
      addFileURL(data.url);
      console.log(data.url);
    } catch (error) {
      console.error("Error uploading files:", error);
      // Handle error const(e.g., show error message to user)
    } finally {
      setLoading(false);
      navigate(siteRoutes.printSetup);
    }
  };

  return (
    <main className="w-full h-screen font-open-sans flex flex-col gap-2">
      <div className="w-full text-lg font-bold text-slate-800 text-center ">
        <div className="flex justify-between px-5 items-center">
          <h1 className=" py-4">Upload Document </h1>
          <BackButton to={routes.printerSelection} />
        </div>
        <div className="w-full h-[1px] bg-slate-800"></div>
      </div>
      <div className="flex flex-1 flex-col gap-2 justify-center items-center p-5">
        <FileSelect maxSize={10} acceptedTypes={[".pdf"]} />
        <FileList files={uploadedFiles} onRemove={removeFile} />
      </div>
      <div className="p-5 w-full">
        <Button
          loading={loading}
          width="full"
          onClick={handleUpload}
          disabled={uploadedFiles.length === 0}
        >
          Upload
        </Button>
      </div>
    </main>
  );
};

export default UploadDocumentPage;
