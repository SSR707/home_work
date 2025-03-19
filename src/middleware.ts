import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token"); 

  if (request.nextUrl.pathname.startsWith("/profile") && !token) {
    return NextResponse.redirect(new URL("/", request.url)); 
  }

  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
