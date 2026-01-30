"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <div>Failed to load user data. Please try again later.</div>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
