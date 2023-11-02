import React from "react";
import { signInWithGoogle } from "../Firebase";

export default function SignInBtn() {
  return (
    <div>
      <button
        onClick={signInWithGoogle}
        className="py-1 ease-in duration-300  hover:scale-110"
      >
        Sign-in with Google
      </button>
    </div>
  );
}
