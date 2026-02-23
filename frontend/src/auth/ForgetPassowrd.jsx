import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ForgetPassowrd = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/30 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Forgot Password</h1>
          <p className="text-gray-400 text-sm mt-2">
            Enter your email to receive reset instructions
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="text-sm text-gray-300">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          {/* Button */}
          <Button
            type="submit"
            content="Send Reset Link"
            className="w-full "
          ></Button>
        </form>

        {/* Back to login */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Remember your password?{" "}
          <Link to="/" className="text-purple-400 hover:underline cursor-pointer">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassowrd;
