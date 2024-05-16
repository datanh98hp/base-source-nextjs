
import { decrypt } from '@/lib/utils/session'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
export { default } from "next-auth/middleware"
// This function can be marked `async` if using `await` inside

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/signup', '/']
export async function middleware(request: NextRequest) {
    // 2. Check if the current route is protected or public
    const path = request.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)
 
    const token = cookies().get('next-auth.session-token')?.value
    
    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
    // 6. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        token &&
        !request.nextUrl.pathname.startsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }
    
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
        '/dashboard'
    ],
}

