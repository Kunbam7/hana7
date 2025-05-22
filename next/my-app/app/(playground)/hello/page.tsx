// export const dynamic = 'force-dynamic';

import { use } from "react";

type Props = {
    searchParams: Promise<{q: string}>;
}

export default function Hello({searchParams}:Props) {
    const { q } = use(searchParams);   //react use 수업 참조
    console.log('q: ', q);

    return <>
        <h3 className="font-bold">Hello Page<span className="text-red-500">{q}</span></h3>
        <div>{`${new Date()}`}</div>
    </>;
}

