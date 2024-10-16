import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { logOut } from "@/utils/logout/actions";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <p>Hello {data.user.id}</p>
      <form action={logOut}>
        <button type="submit"> Logout</button>
      </form>
    </div>
  );
}
