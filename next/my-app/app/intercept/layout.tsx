import Link from "next/link";
import { PropsWithChildren } from "react";

export default function InterceptLayout({children}: PropsWithChildren) {

    return<>
        <div className="border border-red-300 p-2">
            <h1 className="flex gap-3">
                Intercept Layout
                <Link href="/intercept/ic1">IC1</Link>
                <Link href="/intercept/ic2">IC2</Link>
                <Link href="/intercept/ic3">IC3</Link>
            </h1>
            <div>{children}</div>
        </div>
    </>;
}