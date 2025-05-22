'use client';

import HelloSearchparams from "@/app/components/HelloSearchParams";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { PropsWithChildren, Suspense, useLayoutEffect, useState } from "react";

export default function HelloLayout({children}: PropsWithChildren) {
    const [state, setState] = useState('');
    const sparams = useSearchParams();
    console.log('sparams: ', sparams);
    
    const router = useRouter();
    // const 

    useLayoutEffect(() => {
        setState(sparams.get('q') ?? '');
    },[sparams]);

    const urlParams = new URLSearchParams(sparams.toString());
    const setSearchParams = () => {
        urlParams.set('q', '************');
        router.push(`/hello?${urlParams.toString()}`);
    };

    return <>
        
        <ul className="flex">
            <li><Link href='/hello/morning'>Morning</Link></li>
            <li><Link href='/hello/afternoon'>Afternoon</Link></li>
            <li><Link href='/hello/evening'>Evening</Link></li>

        </ul>
        <hr />
        <div>{children}</div>
        <button onClick={setSearchParams}>SetParam</button>
        <Suspense>
            <HelloSearchparams />
        </Suspense>
    </>;
}