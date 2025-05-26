
import DtStr from "./DtStr";

export default function Scr() {

    // DtStr이 hydration + JS가 나중에 딸려옴
    // button은 미리 생성 -> client component function 은 client 서버에서 미리 가져옴 JS만 뺄뿐
    return <>
        <DtStr />
    </>;
}