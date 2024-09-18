import React from "react";
import Button from "../shared/button";

const PrintSettingsModal = ({
  isOpen,
  onClose,
  settings,
  onSettingsChange,
}) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onSettingsChange({ ...settings, [name]: value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Print Settings</h2>
        <div className="mb-4">
          <label className="block mb-2">Copies</label>
          <input
            type="number"
            name="copies"
            value={settings.copies}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            min="1"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Orientation</label>
          <select
            name="orientation"
            value={settings.orientation}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          >
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Paper Size</label>
          <select
            name="paperSize"
            value={settings.paperSize}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          >
            <option value="a4">A4</option>
            <option value="letter">Letter</option>
            <option value="legal">Legal</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Color Mode</label>
          <select
            name="colorMode"
            value={settings.colorMode}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          >
            <option value="color">Color</option>
            <option value="blackAndWhite">Black and White</option>
          </select>
        </div>
        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default PrintSettingsModal;
