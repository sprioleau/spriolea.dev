import create from "zustand";

const useStore = create((set) => ({
  data: null,
  updateData: (dataFromApi) => set((state) => ({ data: dataFromApi })),
}));

export default useStore;
