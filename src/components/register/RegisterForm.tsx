"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/utils/services/register";
import { useRouter } from "next/navigation";
import Typography from "@/components/common/Typography";
import Button from "@/components/common/Button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const { mutate, isLoading, isError } = useMutation(register, {
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Registration successful! Please log in.",
        duration: 3000,
      });
      router.push("/login");
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
          text="Create Account"
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
          text={isLoading ? "Registering..." : "Register"}
        />
        {isError && (
          <p className="text-red-500 text-center mt-2">
            Registration failed. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
