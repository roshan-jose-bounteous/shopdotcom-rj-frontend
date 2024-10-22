"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/utils/services/login";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Typography from "@/components/common/Typography";
import Button from "@/components/common/Button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setAuth = useAuthStore((state) => state.setAuth);
  const router = useRouter();
  const { toast } = useToast(); 

  const { mutate, isLoading, isError } = useMutation(login, {
    onSuccess: (data) => {
      const decodedToken = jwtDecode(data.access_token);
      const userId = decodedToken.sub!;
      setAuth(data.access_token, userId);

      toast({
        title: "Success",
        description: "Login successful!",
        duration: 3000, 
      });

      setTimeout(() => {
        router.push("/shop");
      }, 500); 
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <div className="flex flex-row p-10 justify-center font-albertsans items-center ">
      <Toaster /> 
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-8 max-w-lg w-full border border-gray-800 rounded-lg shadow-lg"
      >
        <Typography
          variant="h1"
          className="text-3xl md:text-4xl font-bungee mb-6 text-center"
          text="Welcome Back!"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="p-3 border border-gray-700 rounded  focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="p-3 border border-gray-700 rounded  focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <Button
          type="submit"
          disabled={isLoading}
          variant="AddToCart"
          className="rounded-md"
          text={isLoading ? "Logging in..." : "Login"}
        />
        {isError && (
          <p className="text-red-500 text-center mt-2">
            Login failed. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
