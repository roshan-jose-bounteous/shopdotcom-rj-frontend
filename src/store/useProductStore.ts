import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProductStore {
  selectedProductId: number | null;
  setSelectedProductId: (id: number | null) => void;
  clearSelectedProduct: () => void;
}

const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      selectedProductId: null,
      setSelectedProductId: (id) => set({ selectedProductId: id }),
      clearSelectedProduct: () => set({ selectedProductId: null }),
    }),
    {
      name: "product-storage", // Unique name for the storage key
      partialize: (state) => ({ selectedProductId: state.selectedProductId }), // Persist only selectedProductId
    }
  )
);

export default useProductStore;
