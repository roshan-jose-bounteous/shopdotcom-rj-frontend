// "use server";

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// import { createClient } from "@/utils/supabase/server";
// import { useAuthStore } from "@/store/authStore";

// export async function logOut(formData: FormData) {
//   const supabase = createClient();

//   const { error } = await supabase.auth.signOut();

//   if (error) {
//     redirect("/error");
//   }

//   useAuthStore.getState().clearUserId();
//   useAuthStore.getState().clearJwtToken();

//   revalidatePath("/", "layout");
//   redirect("/shop");
// }
