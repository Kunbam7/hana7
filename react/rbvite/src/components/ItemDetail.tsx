import { Navigate, useOutletContext, useParams } from 'react-router-dom';
import { useSession, type Cart } from '../contexts/session/SessionContext';

export default function ItemDetail() {
    const { session: { cart }, } = useSession();

    const { curItem } = useOutletContext<{ curItem: Cart }>();
    const { id } = useParams();
    console.log('🚀 item:', curItem, id);
    let item = curItem;
    if (!curItem) {
        if (!id) {
        return <Navigate to='/items' />;
        }
        item = cart.find(item => item.id === +id)!;
    }

return <>
        <h2>ItemDetail; 금액: {item.price.toLocaleString()}</h2>
        <Link to='/items'목록></Link>
        <Link to'edit'수정
    </>;
}