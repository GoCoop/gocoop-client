"use client";

// MetadataUpdater is used to prevent page freezing caused by metadata fetching delays.
// In the "details" page, the metadata (title & description) depends on an API request (e.g., coop name & description).
// Since Next.js waits for `generateMetadata()` to resolve before rendering, a slow request would block the UI.
// To fix this, we set a default metadata first and update it dynamically on the client after the data is loaded.
// This ensures the page loads immediately and prevents bad UX caused by long API response times.

import { useEffect } from "react";

/**
 * Prevents page freezing by updating metadata dynamically on the client side.
 * 
 * In the "details" page, metadata depends on an API request (e.g., coop name & description).
 * Next.js blocks rendering until `generateMetadata()` resolves, which causes delays if the API is slow.
 * 
 * This component ensures the page loads first and updates metadata asynchronously, improving UX.
 */
export default function MetadataUpdater({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);

  return null;
}