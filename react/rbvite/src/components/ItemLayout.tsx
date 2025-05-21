import { useState } from 'react';
import { type Cart, useSession } from '../contexts/session/SessionContext';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ItemLayout() {
  const {
    session: { cart },
  } = useSession();

  const navigate = useNavigate();

  const [curItem, setCurItem] = useState<Cart>();

  const goItemDetail = (item: Cart) => {
    setCurItem(item);
    navigate(item.id.toString());
  };

  return (
    <div className='border' style={{ width: '30rem' }}>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <button onClick={() => goItemDetail(item)}>
              {id}. {name} <FaExternalLinkAlt />
            </button>
          </li>
        ))}
      </ul>
      <div>
        <Outlet context={{ curItem }} />
      </div>
    </div>
  );
}