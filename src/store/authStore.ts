import { create } from "zustand";

interface AuthStore {
  userId: string | null;
  setUserId: (id: string | null) => void;
  clearUserId: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  userId: null,
  setUserId: (id: string | null) => set({ userId: id }),
  clearUserId: () => set({ userId: null }),
}));
