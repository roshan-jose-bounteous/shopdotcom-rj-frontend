// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import { jwtDecode } from "jwt-decode";

// interface AuthStore {
//   userId: string | null;
//   jwtToken: string | null;
//   setJwtToken: (token: string) => void;
//   setUserId: (id: string | null) => void;
//   clearUserId: () => void;
//   clearJwtToken: () => void;
// }

// interface DecodedToken {
//   sub?: string;
//   user_id?: string;
//   id?: string;
// }

// export const useAuthStore = create<AuthStore>()(
//   persist(
//     (set) => ({
//       userId: null,
//       jwtToken: null,
//       setJwtToken: (token) => {
//         set({ jwtToken: token });
//         const userId = getUserId(token);
//         set({ userId });
//       },
//       setUserId: (id: string | null) => set({ userId: id }),
//       clearUserId: () => set({ userId: null }),
//       clearJwtToken: () => set({ jwtToken: null }),
//     }),
//     {
//       name: "server-auth-storage",
//       storage: createJSONStorage(() => localStorage),
//       partialize: (state) => ({
//         jwtToken: state.jwtToken,
//         userId: state.userId,
//       }),
//     }
//   )
// );

// const getUserId = (token: string | null): string | null => {
//   if (!token) return null;

//   try {
//     const decoded: DecodedToken = jwtDecode(token);
//     return decoded.sub || decoded.user_id || decoded.id || null;
//   } catch (error) {
//     console.error("Failed to decode JWT:", error);
//     return null;
//   }
// };

// src/store/authStore.ts
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface AuthState {
//   token: string | null;
//   userId: string | null;
//   isAuthenticated: boolean;
//   setAuth: (token: string, userId: string) => void;
//   clearAuth: () => void;
// }

// export const useAuthStore = create<AuthState>()(
//   persist(
//     (set) => ({
//       token: null,
//       userId: null,
//       isAuthenticated: false,
//       setAuth: (token, userId) => {
//         set({ token, userId, isAuthenticated: true });
//       },
//       clearAuth: () => {
//         set({ token: null, userId: null, isAuthenticated: false });
//       },
//     }),
//     {
//       name: "auth-storage", // Name of the localStorage key
//     }
//   )
// );

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  userId: string | null;
  isAuthenticated: boolean;
  setAuth: (token: string, userId: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      userId: null,
      isAuthenticated: false,
      setAuth: (token, userId) => {
        set({ token, userId, isAuthenticated: true });
      },
      clearAuth: () => {
        set({ token: null, userId: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage", // Name of the localStorage key
      partialize: (state) => ({
        token: state.token,
        userId: state.userId,
        isAuthenticated: state.isAuthenticated,
      }), // Specify the values to be stored in localStorage
    }
  )
);
