import { NextRequest, NextResponse } from "next/server";
import { folders } from "./folderdata";


export async function GET(req:NextRequest) {
    const {searchParams} = req.nextUrl;
    // const q = searchParams.get('q');
    // const results = q ? folders.filter(({ title }) => title.includes(q)) : folders;
    const results = folders.filter((f) => f.title.includes(searchParams.get('q') ?? ''));

    return NextResponse.json(results);
}

export async function POST(req:NextRequest) {
    const body = await req.json();

    const id = Math.max( ...folders.map(({id}) => id), 0) +1;
    const newFolder = { ...body, id};
    folders.push(newFolder);

    return NextResponse.json(newFolder);
}