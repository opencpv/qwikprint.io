import { create } from "zustand";

const useFileStore = create((set, get) => ({
  uploadedFiles: [],
  fileURLs: null,
  filePageNumber: 0, // {{ edit_1 }} Add independent filePageNumber

  addFile: (file) =>
    set((state) => ({
      uploadedFiles: [file],
    })),

  addFileURL: (fileURL) =>
    set((state) => ({
      fileURLs: [fileURL],
    })),

  removeFile: (fileId) =>
    set((state) => ({
      uploadedFiles: state.uploadedFiles.filter((file) => file.id !== fileId),
    })),

  clearFiles: () => set({ uploadedFiles: [] }),

  getFile: (fileId) => {
    const state = get();
    return state.uploadedFiles.find((file) => file.id === fileId);
  },

  getTotalSize: () => {
    const state = get();
    return state.uploadedFiles.reduce((total, file) => total + file.size, 0);
  },

  getFileCount: () => {
    const state = get();
    return state.uploadedFiles.length;
  },

  setFilePageNumber: (
    pageNumber // {{ edit_2 }} Add method to set filePageNumber
  ) => set({ filePageNumber: pageNumber }),
}));

export default useFileStore;
