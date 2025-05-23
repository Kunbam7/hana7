import Link from "next/link";
import Image from "next/image";
import { use } from "react";

export default function Photos() {
    const photos = use(fetch('https://picsum.photos/v2/list?limit=10').then( (res) => res.json()));
    console.log(photos);
    return <>
        <h1 className="text-3xl">Photos</h1>
        {photos.map(({id, author, download_url }) => <Link key = {id} href={`/photos/${id}`}>
            <Image src={download_url} alt={author} width={150} height={150} quality={70} 
            // priority -> lazy 반대
            loading='lazy' placeholder="blur" blurDataURL="/next.svg"/>
        
        </Link>)}
    </>;
};