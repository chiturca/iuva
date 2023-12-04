import React from "react";
import { signInWithGoogle } from "../Firebase";
import { useNavigate } from "react-router-dom";

export default function SignInBtn() {
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/announcementpool");
    } catch (error) {
      console.error("Google Auth Error:", error);
    }
  };
  return (
    <div>
      <button
        onClick={handleSignIn}
        className="bg-[#2D3BBF] bg-opacity-50 text-white p-3 rounded-lg ease-in duration-300  hover:scale-110"
      >
        Google İle Giriş Yap
      </button>
    </div>
  );
}
