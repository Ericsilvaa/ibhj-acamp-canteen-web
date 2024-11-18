import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(req: NextRequest) {
  // const token = req.cookies.get('firebaseAuthToken')

  // if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
  //   return NextResponse.redirect(new URL('/auth/signin', req.url))
  // }

  return NextResponse.next()
}
