"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { useAuthStore } from "@/store/authStore";

export async function login(formData: FormData) {
  const supabase = createClient();

  // Type-casting here for convenience
  // In practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  // Attempt to sign in
  const { data: signInData, error } = await supabase.auth.signInWithPassword(
    data
  );

  if (error) {
    redirect("/error");
  }

  // Log user details after successful sign-in
  if (signInData && signInData.user) {
    // console.log("User details:", signInData.user.id);
    useAuthStore.getState().setUserId(signInData.user.id);
  }

  // Revalidate the path and redirect
  revalidatePath("/", "layout");
  redirect("/private");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // Type-casting here for convenience
  // In practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  // Revalidate the path and redirect
  revalidatePath("/", "layout");
  redirect("/");
}
