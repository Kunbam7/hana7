import { notFound } from "next/navigation";
import { books } from "../bookdata";

type Params = {
    params: Promise<{bookId: string}>;
};
// _: 이 변수를 쓰지 않음을 선언 -> 여기서 받기는 해야함
export async function GET(_req: Request, {params}:Params) {
    const{ bookId } = await params;
    const book = books.find(b => b.id === +bookId);
    if(!book) return notFound();

    return Response.json(book);
}

export async function PATCH(req:Request, {params}:Params) {
    const { bookId } = await params;
    const book = books.find(b => b.id === +bookId);
    if(!book) throw new Error(`#${bookId} is not Found`);

    const body = await req.json();
    book.title = body.title;

    return Response.json(book);
}

export async function DELETE(req:Request, { params }: Params) {
    const { bookId } = await params;
    const idx = books.findIndex(b => b.id === +bookId);
    if(idx === -1)  return Response.json({code: 404, message: `#${bookId} is not Found!`})
    
        books.splice(idx, 1);
    return Response.json({msg : 'OK'});
}