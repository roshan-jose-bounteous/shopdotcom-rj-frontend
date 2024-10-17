import DescriptionContainer from "@/components/description/DescriptionContainer/DescriptionContainer";
import { useAuthStore } from "@/store/authStore";
import useClientAuthStore from "@/store/clientAuthStore";
import React from "react";

const page = () => {
  const { jwtToken } = useAuthStore.getState();
  useClientAuthStore.getState().setJwtToken(jwtToken);

  return <DescriptionContainer token={jwtToken} />;
};

export default page;
