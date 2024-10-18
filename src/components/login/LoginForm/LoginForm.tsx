"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/utils/services/login";
import { useAuthStore } from "@/store/authStore";
import { redirect } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setAuth = useAuthStore((state) => state.setAuth);

  const { mutate, isLoading, isError, error } = useMutation(login, {
    onSuccess: (data) => {
      const decodedToken = jwtDecode(data.access_token);
      console.log("decode: ", decodedToken);

      const userId = decodedToken.sub!; 
      setAuth(data.access_token, userId);
      console.log(
        useAuthStore.getState().token,
        useAuthStore.getState().userId,
        useAuthStore.getState().isAuthenticated
      );

      redirect("/shop");
    },
  });

  console.log(error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 max-w-sm mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="p-2 border rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="p-2 border rounded"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="p-2 bg-blue-500 text-white rounded"
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
      {isError && <p className="text-red-500">Login failed:</p>}
    </form>
  );
};

export default LoginForm;
