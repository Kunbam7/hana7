import { NextRequest, NextResponse } from "next/server";
// Request(java 기본 제공) <-> NextRequest (상속받아서 기능확장) -> class

export function GET(request: NextRequest) {
    const {searchParams, host, hostname, pathname, basePath, port, protocol} = request.nextUrl;

    return NextResponse.json({
        id: 1,
        name: '홍길동',
        str: searchParams.get('str'),
        host,
        hostname,
        pathname,
        basePath,
        port, 
        protocol
    });   //static func used
}

export function POST() {}