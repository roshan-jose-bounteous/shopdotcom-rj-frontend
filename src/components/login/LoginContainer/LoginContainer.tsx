// import React from "react";
// import { useAuthStore } from "@/store/authStore";
// import LoginForm from "@/components/login/LoginForm/LoginForm"; // Ensure this path is correct based on your project structure

// const LoginContainer = () => {
//   const { isAuthenticated, clearAuth } = useAuthStore((state) => ({
//     isAuthenticated: state.isAuthenticated,
//     clearAuth: state.clearAuth,
//   }));

//   const handleLogout = () => {
//     clearAuth();
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       {isAuthenticated ? (
//         <button
//           onClick={handleLogout}
//           className="p-2 bg-red-500 text-white rounded"
//         >
//           Logout
//         </button>
//       ) : (
//         <LoginForm />
//       )}
//     </div>
//   );
// };

// export default LoginContainer;

// "use client";
// import React from "react";
// import { useAuthStore } from "@/store/authStore";
// import LogoutForm from "../LogoutForm/LogoutForm";
// import LoginForm from "../LoginForm/LoginForm";

// const LoginContainer = () => {
//   const isAuthenticated = useAuthStore.getState().isAuthenticated;

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       {isAuthenticated ? <LogoutForm /> : <LoginForm />}
//     </div>
//   );
// };

// export default LoginContainer;

"use client";
import React from "react";
import { useAuthStore } from "@/store/authStore";
import LogoutForm from "../LogoutForm/LogoutForm";
import LoginForm from "../LoginForm/LoginForm";

const LoginContainer = () => {
  // Use Zustand's hook to get the latest state
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isAuthenticated ? <LogoutForm /> : <LoginForm />}
    </div>
  );
};

export default LoginContainer;
