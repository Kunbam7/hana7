import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ItemEdit() {
    const {id} = useParams();
    const navigate = useNavigate();

    const nameRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(!nameRef.current || !priceRef.current) return;
        nameRef.current.value = curItem.name;

        nameRef.current.select();
        nameRef.current.focus();
    }, []);

    const goDetail = () => navigate(`/items/${id}`);
    const deleteDetail = () => 
    const saveItem = () => {
        const name = nameRef.current?.value;
        const price = priceRef.current?.value;
        if(!name) {
            alert('상품명을 입력');
            return nameRef.current?.focus();
        }
    };
    return <>
        <form>
            <input type="text" placeholder="상품명..." />
            <input type="number" placeholder="금액..." />

            <button onClick={goDetail}>취소</button>
            <button onClick={() => {
                removeItem
            }}>삭제</button>
            <button onClick={}>수정</button>
        </form>
    </>;
}