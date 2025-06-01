// components/Header.js
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header>
      <Link to="/products">Products</Link> | <Link to="/cart">Cart 🛒 ({total})</Link>
    </header>
  );
}
