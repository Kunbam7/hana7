import { PropsWithChildren, use } from "react";

type Props = {
    params: Promise<{ photoId: string}>;
};

export default function Photo({params}: PropsWithChildren<Props>) {
    const {photoId} = use(params);
    const {id, author, download_url, width, height} = use(fetch(`https://picsum.photos/id/${photoId}/info`).then((res) => res.json));
    return <>
    <h1>{author}</h1>
    
    
    </>;
}