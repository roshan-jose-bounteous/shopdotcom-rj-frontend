// import { login } from "@/utils/login/actions";

// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       <label htmlFor="password">Password:</label>
//       <input id="password" name="password" type="password" required />
//       <button formAction={login}>Log in</button>
//       {/* <button formAction={signup}>Sign up</button> */}
//     </form>
//   );
// }
import LoginContainer from "@/components/login/LoginContainer/LoginContainer";
import React from "react";

const page = () => {
  return (
    <div>
      <LoginContainer />
    </div>
  );
};

export default page;
