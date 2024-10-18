"use client";
import React from "react";
import { useAuthStore } from "@/store/authStore";

const LogoutForm = () => {
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const handleLogout = () => {
    clearAuth();
  };

  return (
    <button
      onClick={handleLogout}
      className="p-2 bg-red-500 text-white rounded"
    >
      Logout
    </button>
  );
};

export default LogoutForm;
