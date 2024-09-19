import { create } from "zustand";

const usePrinterConfigStore = create((set) => ({
  // Site selection
  selectedSite: null,
  setSelectedSite: (site) => set({ selectedSite: site }),

  // Printer configuration
  printerConfig: {
    model: null,
    paperSize: "A4",
    orientation: "portrait",
    quality: "normal",
    copies: 1,
    colorMode: "color",
    // Add printing cost
    costPerPage: 0.5, // Default cost per page cedis
  },
  setPrinterModel: (model) =>
    set((state) => ({
      printerConfig: { ...state.printerConfig, model },
    })),
  setPaperSize: (paperSize) =>
    set((state) => ({
      printerConfig: { ...state.printerConfig, paperSize },
    })),
  setOrientation: (orientation) =>
    set((state) => ({
      printerConfig: { ...state.printerConfig, orientation },
    })),
  setPrintQuality: (quality) =>
    set((state) => ({
      printerConfig: { ...state.printerConfig, quality },
    })),
  setPrinterConfig: (config) => set({ printerConfig: { ...config } }),
  updatePrinterConfig: (updates) =>
    set((state) => ({
      printerConfig: { ...state.printerConfig, ...updates },
    })),
  // Add a function to update cost per page
  updateCostPerPage: (cost) =>
    set((state) => ({
      printerConfig: { ...state.printerConfig, costPerPage: cost },
    })),
  // Reset all configurations
  resetConfig: () =>
    set({
      selectedSite: null,
      printerConfig: {
        model: null,
        paperSize: null,
        orientation: "portrait",
        quality: "normal",
      },
    }),
}));

export default usePrinterConfigStore;
