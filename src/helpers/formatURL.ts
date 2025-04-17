/**
 * Returns a clean, formatted URL string by removing its protocol (`https://`), optional `www`, 
 * and any trailing slash.
 * 
 * @param url - A full URL string (e.g., "https://www.example.com/")
 * @returns The simplified domain name (e.g., "example.com")
 */

export default function formatURL(url: string): string {
  return url
    .replace(/^(https?:\/\/)?(www\.)?/, '')
    .replace(/\/$/, '');
}