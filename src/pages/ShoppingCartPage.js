// pages/ShoppingCartPage.js
import { useDispatch, useSelector } from 'react-redux';
import { incrementQty, decrementQty, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function ShoppingCartPage() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <p>Total items: {totalQty}</p>
      <p>Total cost: ${totalPrice}</p>

      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <p>{item.name} - ${item.price}</p>
          <p>Qty: {item.qty}</p>
          <button onClick={() => dispatch(incrementQty(item.id))}>+</button>
          <button onClick={() => dispatch(decrementQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
}
