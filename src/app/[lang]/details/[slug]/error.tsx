"use client";

import { useEffect } from "react";

export default function ErrorBoundary({ error }: { error: Error }) {
  useEffect(() => {
    console.error("Error loading coop data!");
  }, [error]);

  return (
    <div>
      <h2>{error.name}</h2>
      <p>{error.message}</p>
    </div>
  );
}
