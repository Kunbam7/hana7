import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";

type Props = {
    login: ReactNode;
    profile: ReactNode;
}

export default function ParallelLayout({children, login, profile}: PropsWithChildren<Props>) {

    return <>
        <div className="border border-green-300 p-2 mb-2">
            <h1 className='flex justify-around'>Parallel Layout</h1>
            <ul className="flex gap-1">
                <li>
                    <Link href="/parallel/aaa">AAA</Link>
                </li>
                <li>
                    <Link href="/parallel/bbb">BBB</Link>
                </li>
                <li>
                    <Link href="/parallel/xxx">XXX</Link>
                </li>
            </ul>
            <div className="border m-1 p-1">{profile}</div>
            <hr />
            <div className="border m-1 p-1">{login}</div>
            <hr />
            {children}
        </div>
    </>;
}