"use client";

// This creates a fade-in animation every time you navigate between /users, /users/list, or /users/Alice
// - demonstrating that the template remounts each time (unlike layout which persists).
export default function UserTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        animation: "fadeIn 0.3s ease-in",
      }}
    >
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <h2>User Template</h2>
      {children}
    </div>
  );
}
