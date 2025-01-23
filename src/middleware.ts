import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";



/**
 * Check authentication.
 */
function checkAuth(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const prefix = String(pathname).split('/')[1];
  const userToken = request.cookies.get("userToken")?.value;

  function logout() {
    request.cookies.delete("userToken");
    return NextResponse.redirect(new URL('/login', request.url));
  }

  function abort() {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (userToken) {
    if (['login', 'register'].includes(prefix)) return abort();
  } else {
    if (!['login', 'register'].includes(prefix)) return logout();
  }

  return null;
}


/**
 * Main middleware.
 */
export function middleware(request: NextRequest) {
  const isAccessableRoute = checkAuth(request);
  if (isAccessableRoute) return isAccessableRoute;

  return NextResponse.next();
}

/**
 * Middleware configuration object to specify matched routes.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|public|favicon.ico).*)',
  ],
};
