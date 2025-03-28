import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "../i18-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-expect-error locales are readonly 
  const locales: string[] = i18n.locales;

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const params = request.nextUrl.searchParams;

  // These pathnames won't have the prefix [lang]
  if (
    [
      '/manifest.json', 
      '/favicon.ico', 
      '/robots.txt', 
      '/sitemap.xml'
    ].includes(pathname)
  ) {
    return;
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  const locale = getLocale(request);
  const response = NextResponse.next();

  response.cookies.set("user_lang", locale ?? i18n.defaultLocale, { path: "/" });

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}?${params}`,
        request.url
      )
    );
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};