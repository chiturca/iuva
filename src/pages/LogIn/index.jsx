import React from "react";
import SignInBtn from "../../components/SignInBtn";
import Layout from "../../components/Layout";

export default function LogIn() {
  return (
    <Layout>
      <div className="border flex flex-col items-center md:w-1/2 m-auto p-14 rounded-3xl shadow-[5px_5px_15px_-1px_rgba(0,0,0,0.3)] z-50">
        <h1 className="text-[#2D3BBF] font-bold text-2xl pb-14 uppercase">
          Giriş Yap
        </h1>
        <div className="flex justify-center items-center pb-20">
          <SignInBtn />
        </div>
      </div>
    </Layout>
  );
}
