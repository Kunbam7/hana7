import { Link, useNavigate } from "react-router-dom";

export const NotFound = () => {
    const naviage = useNavigate();
    const goPrivPage = () => naviage(-1);
    return <>
        <h2>404 not found</h2>
        <div>페이지를 찾을 수 없습니다!</div>
        <div>
            <Link to='/'>Homem으로</Link>
            <button onClick={goPrivPage}>이전페이지로</button>
        </div>
    </>;
};