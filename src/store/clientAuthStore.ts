import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";

interface ClientAuthStore {
  jwtToken: string | null;
  setJwtToken: (token: string | null) => void;
  clearJwtToken: () => void;
}

const noopStorage: StateStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

const useClientAuthStore = create<ClientAuthStore>()(
  persist(
    (set) => ({
      jwtToken: null,
      setJwtToken: (token) => set({ jwtToken: token }),
      clearJwtToken: () => set({ jwtToken: null }),
    }),
    {
      name: "client-auth-storage",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : noopStorage
      ),
      partialize: (state) => ({ jwtToken: state.jwtToken }),
    }
  )
);

export default useClientAuthStore;
