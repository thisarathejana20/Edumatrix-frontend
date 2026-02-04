import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-app-bg flex items-center justify-center px-4">
      <div className="w-full max-w-lg card p-10">
        {/* Top icon */}
        <div className="flex items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center">
            <span className="text-brand-primary text-2xl font-bold">!</span>
          </div>
        </div>

        {/* Text */}
        <div className="text-center mt-6">
          <p className="text-brand-primary font-semibold tracking-wide">
            ERROR 404
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-text-title">
            Page not found
          </h1>
          <p className="mt-3 text-text-muted">
            The page you’re looking for doesn’t exist or may have been moved.
            Check the URL or return to a safe page.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            className="btn-primary h-11 sm:w-auto px-6"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>

          <button
            className="btn-secondary h-11 sm:w-auto px-6"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-text-muted mt-6">
          EDUMATRIX • University Administration System
        </p>
      </div>
    </div>
  );
}
