import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md card p-10">
        {/* Icon */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
            E
          </div>

          <h1 className="mt-5 text-3xl font-semibold text-slate-900">Log In</h1>

          <p className="text-slate-500 text-sm mt-2">
            Enter your credentials to access EDUMATRIX
          </p>
        </div>

        {/* Form */}
        <div className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="john@gmail.com"
              className="input h-12"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input h-12"
            />
          </div>

          {/* Button */}
          <button className="btn-primary h-12">Log In</button>

          {/* Reset */}
          <p className="text-center text-sm text-slate-500">
            Forgot password?{" "}
            <span className="text-indigo-600 font-medium hover:underline cursor-pointer">
              Reset
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
