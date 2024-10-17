import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

interface AuthStore {
  userId: string | null;
  jwtToken: string | null;
  setJwtToken: (token: string) => void;
  setUserId: (id: string | null) => void;
  clearUserId: () => void;
  clearJwtToken: () => void;
}

interface DecodedToken {
  sub?: string;
  user_id?: string;
  id?: string;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      userId: null,
      jwtToken: null,
      setJwtToken: (token) => {
        set({ jwtToken: token });
        const userId = getUserId(token); 
        set({ userId }); 
      },
      setUserId: (id: string | null) => set({ userId: id }),
      clearUserId: () => set({ userId: null }),
      clearJwtToken: () => set({ jwtToken: null }),
    }),
    {
      name: "server-auth-storage", 
      storage: createJSONStorage(() => localStorage), 
      partialize: (state) => ({
        jwtToken: state.jwtToken, 
        userId: state.userId, 
      }),
    }
  )
);

const getUserId = (token: string | null): string | null => {
  if (!token) return null;

  try {
    const decoded: DecodedToken = jwtDecode(token);
    return decoded.sub || decoded.user_id || decoded.id || null;
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};
