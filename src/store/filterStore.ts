import { create } from "zustand";

interface FilterStore {
  selectedTag: string | null;
  selectedSize: string | null;
  selectedSort: string | null;
  setSelectedTag: (tag: string) => void;
  setSelectedSize: (size: string) => void;
  setSelectedSort: (sort: string) => void;
  clearFilters: () => void;
}

const useFilterStore = create<FilterStore>((set) => ({
  selectedTag: null,
  selectedSize: null,
  selectedSort: null,
  setSelectedTag: (tag: string) => set({ selectedTag: tag }),
  setSelectedSize: (size: string) => set({ selectedSize: size }),
  setSelectedSort: (sort: string) => set({ selectedSort: sort }),
  clearFilters: () =>
    set({ selectedTag: null, selectedSize: null, selectedSort: null }),
}));

export default useFilterStore;
