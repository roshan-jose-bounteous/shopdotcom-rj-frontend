"use client";
import Button from "@/components/common/Button";
import Typography from "@/components/common/Typography";
import React, { useState } from "react";
import { useAuthStore } from "@/store/authStore"; 
import { useAddOrder } from "@/utils/services/useAddOrder"; 

const Checkout: React.FC<{ cartItems: any[] }> = ({ cartItems }) => {
  const { userId } = useAuthStore(); 
  const { mutate: addOrder } = useAddOrder(); 

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    phone_no: "", 
    paymentMethod: "cashOnDelivery",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const orderData = {
      cart_id: cartItems.map((item) => item.cartItem.id), 
      user_id: userId, 
      ...formData, 
    };

    
    addOrder(orderData);
    console.log("Form data:", orderData); 
  };

  return (
    <div className=" p-4 md:p-8 lg:p-16 font-albertsans">
      <Typography
        variant="p"
        className="font-bungee text-3xl flex justify-center"
        text="CHECKOUT"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md mx-auto"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-albertsans">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded-md font-albertsans"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="mb-1 font-albertsans">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="p-2 border rounded-md font-albertsans"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="pincode" className="mb-1 font-albertsans">
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="p-2 border rounded-md font-albertsans"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="city" className="mb-1 font-albertsans">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="p-2 border rounded-md font-albertsans"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="state" className="mb-1 font-albertsans">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="p-2 border rounded-md font-albertsans"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone_no" className="mb-1 font-albertsans">
            Phone Number
          </label>
          <input
            type="text"
            id="phone_no"
            name="phone_no"
            value={formData.phone_no}
            onChange={handleChange}
            className="p-2 border rounded-md font-albertsans"
            required
          />
        </div>


        <div className="flex items-center">
          <input
            type="radio"
            id="cashOnDelivery"
            name="paymentMethod"
            value="cashOnDelivery"
            checked={formData.paymentMethod === "cashOnDelivery"}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="cashOnDelivery" className="font-albertsans">
            Cash on Delivery
          </label>
        </div>
        <Button
          type="submit"
          variant="AddToCart"
          className="py-2 rounded-md mt-4 font-albertsans"
          text="Checkout"
        />
      </form>
    </div>
  );
};

export default Checkout;
