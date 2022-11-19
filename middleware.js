import { NextResponse } from "next/server";

export function middleware(request) {
  // const locales = ['en', 'tr'];
  // const defaultLang = 'tr';
  // const { headers, nextUrl } = request;

  // const shouldCheckLocale = !nextUrl.pathname.startsWith("/_next") && !nextUrl.pathname.startsWith("/favicon");

  // const reqLocale = nextUrl.pathname.split("/")[1];
  // const noValidLocale = !locales.includes(reqLocale);
  
  // console.log(nextUrl.pathname)
  // if (shouldCheckLocale && noValidLocale) {
  //   console.log('nolocale: '+nextUrl.pathname)
  //   return NextResponse.rewrite(new URL(`/${defaultLang}${nextUrl.pathname}`, request.url));
  // }

  return NextResponse.next();

  // if (shouldCheckLocale && noValidLocale) {
  //   const accepts = headers.get("accept-language") || "";
  //   // Omit country for now
  //   const detected = accepts.split(",")[0].split("-")[0];

  //   const validLocale = locales.includes(detected) ? detected : defaultLang;

  //   nextUrl.pathname = `${nextUrl.pathname}`;

  //   const response = NextResponse.next()
  //   response.cookies.set('lang', validLocale)
    
  //   return NextResponse.rewrite(new URL(`/${validLocale}${nextUrl.pathname}`, request.url));
  // }

  // const response = NextResponse.next()
  // response.cookies.set('lang', reqLocale)

  // return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
