import { NextRequest, NextResponse } from "next/server";

export function middleware(req:NextRequest) {
    const {pathname} = req.nextUrl;
    console.log('pathname: ', pathname);
    if(pathname.startsWith('/hello/')) {
        const paths = pathname.substring(pathname.lastIndexOf('/'));
        console.log('path: ', paths);
        // NextResponse.redirect('/hi/morning');
        return NextResponse.redirect(new URL('/hi/morning', req.url));
    }  

    searchParams.set('q', '111');
    return NextResponse.next();
}

export const config = {
    matcher: ['/hello/:path*', '/api/folders/:path*'],
};