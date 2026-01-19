import React from "react";
import Navbar from "../components/home/Navbar";
import AuthIntro from "../components/auth/AuthIntro";
import AuthForm from "../components/auth/AuthForm";
import Footer from "../components/home/Footer";

const Login = () => (
  <div className="min-h-screen bg-gray-50 overflow-hidden">
    <Navbar />
    <div className="flex justify-center items-center mt-40 px-4 mb-20">
      <div className="flex w-full max-w-screen-lg h-[550px] shadow-lg rounded-lg overflow-hidden border border-[#788595] bg-white">
        <AuthIntro
          heading="Welcome Back"
          subheading="Login with your personal information"
          buttonText="Sign Up"
          buttonLink="/signup"
        />
        <AuthForm type="login" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Login;
