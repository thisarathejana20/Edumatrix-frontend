export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-app-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md card p-10">{children}</div>
    </div>
  );
}
