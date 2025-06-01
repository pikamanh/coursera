// pages/ProductListingPage.js
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulents', image: '/images/aloe.jpg' },
  { id: 2, name: 'Snake Plant', price: 12, category: 'Indoor', image: '/images/snake.jpg' },
  { id: 3, name: 'Peace Lily', price: 15, category: 'Flowering', image: '/images/lily.jpg' },
  { id: 4, name: 'ZZ Plant', price: 11, category: 'Indoor', image: '/images/zz.jpg' },
  { id: 5, name: 'Cactus', price: 9, category: 'Succulents', image: '/images/cactus.jpg' },
  { id: 6, name: 'Orchid', price: 20, category: 'Flowering', image: '/images/orchid.jpg' },
];

export default function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const addedIds = cartItems.map(i => i.id);

  return (
    <>
      <h2>Our Plants</h2>
      {['Succulents', 'Indoor', 'Flowering'].map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div className="plant-grid">
            {plants.filter(p => p.category === cat).map(plant => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  onClick={() => dispatch(addToCart(plant))}
                  disabled={addedIds.includes(plant.id)}
                >
                  {addedIds.includes(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
