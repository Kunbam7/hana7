'use client'

import { useEffect, useState } from "react";

export default function DtStr() {
    const [dtStr, setDtStr] = useState('');

    const dt = new Date().toString();
    useEffect(() => setDtStr(dt), [dt]);
    
    return <>
        <h1>CSR : {dtStr}</h1>

        <button onClick={() => alert(dtStr)} className="btn btn-primary" >Button</button>
    </>;

}