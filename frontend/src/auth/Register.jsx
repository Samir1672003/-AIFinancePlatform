import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/30 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
        {/* Logo / Title */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          <p className="text-gray-400 text-sm mt-2">
            Join the AI powered future
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          {/* Button */}
          <Button
            type="submit"
            className="w-full"
            content={"Create Account"}
          ></Button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-cyan-400 cursor-pointer hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
