import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
// Request(java 기본 제공) <-> NextRequest (상속받아서 기능확장) -> class

export async function GET(request: NextRequest) {
    // const {searchParams, host, hostname, pathname, basePath, port, protocol} = request.nextUrl;

    const nextCookies = await cookies();
    // console.log('reqCookies: ', nextCookies);
    
    const reqHeaders = new Headers(request.headers);
    // console.log('reqHeaders: ', reqHeaders);
    
    
    const nextHeaders = await headers();
    // console.log('nextHeaders: ', nextHeaders);
    const sid = nextCookies.get('sid');
    console.log('sid: ', sid);
    
    const userAgent = nextHeaders.get('user-agent');
    console.log('userAgent: ', userAgent);

    const res = NextResponse.json({
        headers: { 'Custom-Cookie': userAgent, 'Set-Cookie': 'sid=1123' }, });

    res.cookies.set('x', '123');
    res.cookies.set('y', '456');

    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + (24* 60 * 16400 * 1000))

    res.cookies.set('otherCookies', 'ooxx', {
        
        httpOnly: true,
        path: '/',
        secure: false,
        expires: expireDate, // maxAge와 같은 쓰임새, 둘 중 하나만 씀 + maxAge 우선?

        maxAge: 5 * 60, // 86400
    });

    const dbPasswd = process.env.DB_PASSWD;
    const {DEV_X} = process
    console.log("dbPasswd: ", dbPasswd);
    

    return res;
    // return NextResponse.json({
    //     id: 1,
    //     name: '홍길동',
    //     str: searchParams.get('str'),
    //     host,
    //     hostname,
    //     pathname,
    //     basePath,
    //     port, 
    //     protocol
    // });   //static func used
}

export function POST() {}