import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { logOut } from "@/utils/logout/actions";
import { useAuthStore } from "@/store/authStore"; 

export default async function PrivatePage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  const { jwtToken } = useAuthStore.getState();

  return (
    <div>
      <p>Hello {data.user.id}</p>
      <p>Your JWT Token: {jwtToken}</p> 
      <form action={logOut}>
        <button type="submit"> Logout</button>
      </form>
    </div>
  );
}
