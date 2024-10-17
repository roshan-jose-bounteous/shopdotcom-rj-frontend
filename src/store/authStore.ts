// import { create } from "zustand";
// import jwt_decode from "jwt-decode";

// interface AuthStore {
//   userId: string | null;
//   jwtToken: string | null;
//   setJwtToken: (token: string) => void;
//   setUserId: (id: string | null) => void;
//   clearUserId: () => void;
//   clearJwtToken: () => void;
// }

// export const useAuthStore = create<AuthStore>((set) => ({
//   userId: null,
//   jwtToken: null,
//   setJwtToken: (token) => set({ jwtToken: token }),
//   setUserId: (id: string | null) => set({ userId: id }),
//   getUserId: () => {
//     const token = get().jwtToken;
//     if (!token) return null;

//     try {
//       const decoded: any = jwt_decode(token);
//       return decoded.sub || decoded.user_id || decoded.id || null;
//     } catch (error) {
//       console.error("Failed to decode JWT:", error);
//       return null;
//     }
//   },
//   clearUserId: () => set({ userId: null }),
//   clearJwtToken: () => set({ jwtToken: null }),
// }));

// import { create } from "zustand";
// import jwt_decode from "jwt-decode";

// interface AuthStore {
//   userId: string | null;
//   jwtToken: string | null;
//   setJwtToken: (token: string) => void;
//   setUserId: (id: string | null) => void;
//   clearUserId: () => void;
//   clearJwtToken: () => void;
// }

// // Utility type for decoding the JWT
// interface DecodedToken {
//   sub?: string;
//   user_id?: string;
//   id?: string;
// }

// export const useAuthStore = create<AuthStore>((set) => ({
//   userId: null,
//   jwtToken: null,
//   setJwtToken: (token) => {
//     set({ jwtToken: token });
//     const userId = getUserId(token); // Extract userId from the token
//     set({ userId }); // Store the userId
//   },
//   setUserId: (id: string | null) => set({ userId: id }),
//   clearUserId: () => set({ userId: null }),
//   clearJwtToken: () => set({ jwtToken: null }),
// }));

// // Function to decode token and get userId
// const getUserId = (token: string | null): string | null => {
//   if (!token) return null;

//   try {
//     const decoded: DecodedToken = jwt_decode(token);
//     return decoded.sub || decoded.user_id || decoded.id || null;
//   } catch (error) {
//     console.error("Failed to decode JWT:", error);
//     return null;
//   }
// };

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

interface AuthStore {
  userId: string | null;
  jwtToken: string | null;
  setJwtToken: (token: string) => void;
  setUserId: (id: string | null) => void;
  clearUserId: () => void;
  clearJwtToken: () => void;
}

// Utility type for decoding the JWT
interface DecodedToken {
  sub?: string;
  user_id?: string;
  id?: string;
}

// Create a persistent store for authentication
export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      userId: null,
      jwtToken: null,
      setJwtToken: (token) => {
        set({ jwtToken: token });
        const userId = getUserId(token); // Extract userId from the token
        set({ userId }); // Store the userId
      },
      setUserId: (id: string | null) => set({ userId: id }),
      clearUserId: () => set({ userId: null }),
      clearJwtToken: () => set({ jwtToken: null }),
    }),
    {
      name: "auth-storage", // Unique name for the storage key
      partialize: (state) => ({
        jwtToken: state.jwtToken, // Persist only jwtToken
        userId: state.userId, // Optionally persist userId as well
      }),
    }
  )
);

// Function to decode token and get userId
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
