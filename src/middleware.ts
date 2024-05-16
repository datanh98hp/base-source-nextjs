
import { authOptions } from '@/lib/authOptions'
import { checkAuth } from '@/lib/check_auth'
import { parseJwt } from '@/lib/func'
import { getSession } from 'next-auth/react'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtDecode } from "jwt-decode";
import NextAuth from 'next-auth'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    // console.log("cookies data : ", request.cookies.get('next-auth.session-token'))
    console.log("middleware----------")
    const token = request.cookies.get('next-auth.session-token')
    // console.log("token : ", token?.value)
    // if (!token) {
    //     // return NextResponse.rewrite(new URL('/login', request.url))
    //     return NextResponse.rewrite(new URL('/auth', request.url))
    // }
    // return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
        // '/login/:path'
    ],
}

