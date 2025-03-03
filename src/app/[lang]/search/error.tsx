"use client";

import ErrorIcon from "@/icons/ErrorIcon";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div
      className="h-dvh p-6 text-center flex flex-col justify-center items-center gap-2"
    >
      <ErrorIcon /> 
      {/* <h2>{error.name}</h2> */}
      <h2>{error.message}</h2>
    </div>
  );
}