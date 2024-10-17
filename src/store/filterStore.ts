

import { create } from "zustand";

interface FilterStore {
  selectedTag: string | null; // Stores the selected tag (e.g., T-Shirts, Shorts, etc.)
  selectedSize: string | null; // Stores the selected size (e.g., Small, Medium, etc.)
  selectedSort: string | null; // Stores the selected sort option (e.g., Most Popular, Price High to Low)
  setSelectedTag: (tag: string) => void; // Function to set the selected tag
  setSelectedSize: (size: string) => void; // Function to set the selected size
  setSelectedSort: (sort: string) => void; // Function to set the selected sort option
  clearFilters: () => void; // Function to clear all filters
}

const useFilterStore = create<FilterStore>((set) => ({
  selectedTag: null,
  selectedSize: null,
  selectedSort: null,
  setSelectedTag: (tag: string) => set({ selectedTag: tag }),
  setSelectedSize: (size: string) => set({ selectedSize: size }),
  setSelectedSort: (sort: string) => set({ selectedSort: sort }), // Add this line
  clearFilters: () =>
    set({ selectedTag: null, selectedSize: null, selectedSort: null }), // Update to clear sort as well
}));

export default useFilterStore;
