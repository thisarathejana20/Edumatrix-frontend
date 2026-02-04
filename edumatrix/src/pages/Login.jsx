import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    // Later: call backend /auth/login
    console.log({ email, password });
  }

  return (
    <AuthLayout>
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center text-white text-2xl font-bold">
          E
        </div>

        <h1 className="mt-5 text-3xl font-semibold text-text-title">Log In</h1>

        <p className="text-text-muted text-sm mt-2 text-center">
          Enter your credentials to access{" "}
          <span className="font-medium">EDUMATRIX</span>
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        {/* Email */}
        <div>
          <label className="label">Email</label>
          <input
            type="email"
            className="input h-12"
            placeholder="john@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="label">Password</label>
          <input
            type="password"
            className="input h-12"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Button */}
        <button type="submit" className="btn-primary h-12">
          Log In
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-text-muted">
          Forgot password?{" "}
          <span className="text-brand-primary font-medium hover:underline cursor-pointer">
            Reset
          </span>
        </p>
      </form>
    </AuthLayout>
  );
}
