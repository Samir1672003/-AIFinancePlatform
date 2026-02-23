import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">

      {/* AI Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/30 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Login to your AI dashboard
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-purple-500" />
              Remember me
            </label>

            <Link to="/forgetpassowrd" className="text-cyan-400 cursor-pointer hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <Button
            type="submit"
            className="w-full "
            content={"Sign In"}
          >
           
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Google Login */}
        <button className="w-full cursor-pointer py-3 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition">
          Continue with Google
        </button>

        {/* Register */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-purple-400 hover:underline cursor-pointer">
            Create one
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;