
"use client";
import React from "react";
import { useAuthStore } from "@/store/authStore";
import LogoutForm from "../LogoutForm/LogoutForm";
import LoginForm from "../LoginForm/LoginForm";

const LoginContainer = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isAuthenticated ? <LogoutForm /> : <LoginForm />}
    </div>
  );
};

export default LoginContainer;
