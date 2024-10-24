"use client";

import React, { useState } from "react";
import Typography from "../common/Typography";
import Link from "next/link";
import SearchIconGray from "../../../public/assets/icons/SearchIconGray";
import ShoppingCart from "../../../public/assets/icons/ShoppingCart";
import Account from "../../../public/assets/icons/Account";
import Hamburger from "../../../public/assets/icons/Hamburger";
import Button from "../common/Button";
import SearchIcon from "../../../public/assets/icons/SearchIcon";
import CloseIcon from "../../../public/assets/icons/CloseIcon";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const { toast } = useToast(); // Get toast function from the hook

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  const handleLogout = () => {
    clearAuth();
    clearAuth();
    toast({
      title: "Logged Out",
      description: "You have successfully logged out.",
      duration: 3000, // Toast duration
    });
    router.push("/shop");
  };

  return (
    <div className="mx-4 md:mx-6 lg:mx-28 my-3 md:my-4 lg:my-6">
      <div className="flex flex-row items-center justify-start w-full gap-2 md:gap-8 lg:gap-10 border-b pb-5 md:pb-10">
        <div className="sm:block md:hidden flex items-center">
          <Button variant="Default" onClick={() => setIsMenuOpen(true)}>
            <Hamburger />
          </Button>
        </div>
        <Link href="/shop">
          <Typography
            variant="h1"
            className="font-bungee text-2xl"
            text="SHOP.CO"
          />
        </Link>
        <div className="hidden md:flex flex-row gap-9 lg:gap-10 font-albertsans md:w-full lg:w-4/12">
          <Link href="/shop">
            <Typography variant="p" text="Shop" />
          </Link>

          <Typography variant="p" text="On Sale" />
          <Typography variant="p" text="New Arrivals" />
          <Typography variant="p" text="Brands" />
        </div>
        <div className="flex flex-row items-center gap-4 w-full md:w-1/3 lg:w-[65%] justify-end">
          <div className="sm:block md:block lg:hidden">
            <SearchIcon />
          </div>
          <div className="hidden lg:flex items-center bg-[#F0F0F0] justify-start gap-1 pl-4 py-2 w-full font-albertsans border rounded-3xl focus-within:ring-2 focus-within:ring-gray-300">
            <SearchIconGray />
            <input
              type="text"
              className="bg-[#F0F0F0] text-sm outline-none ml-2 w-full"
              placeholder="Search for products..."
            />
          </div>
          <div onClick={() => router.push("/cart")} className="cursor-pointer">
            <ShoppingCart />
          </div>
          {/* Account Popover */}
          <Popover>
            <PopoverTrigger>
              <div className="cursor-pointer">
                <Account />
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-4">
              {isAuthenticated ? (
                <Button variant="Default" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <div className="flex flex-col items-start gap-1">
                  <Button variant="Default" className="pb-2 border-b border-black border-opacity-10" onClick={handleLogin}>
                    Login
                  </Button>
                  <Button variant="Default" onClick={handleRegister}>
                    Register
                  </Button>
                </div>
              )}
            </PopoverContent>
          </Popover>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white shadow-lg p-4 w-[50%] md:hidden transition-transform transform translate-x-0">
            <div className="flex justify-between items-center mb-4">
              <Typography
                variant="h1"
                className="font-bungee text-xl"
                text="Menu"
              />
              <button onClick={() => setIsMenuOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col gap-4 font-albertsans">
              <Link href="/shop">
                <Typography variant="p" className="" text="Shop" />
              </Link>
              <Link href="/on-sale">
                <Typography variant="p" className="" text="On Sale" />
              </Link>
              <Link href="/new-arrivals">
                <Typography variant="p" className="" text="New Arrivals" />
              </Link>
              <Link href="/brands">
                <Typography variant="p" className="" text="Brands" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
