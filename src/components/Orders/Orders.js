import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import PageTitle from '../PageTitle/PageTitle'

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart();

  const handleRemoveProduct = product => {
    const rest = cart.filter(pd => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  }

  return (
    <div>

      <PageTitle title="Orders"></PageTitle>
      <div className='main'>
        <div className='review-container'>
          {
            cart.map(product => <ReviewItem
              key={product._id}
              product={product}
              handleRemoveProduct={handleRemoveProduct}
            ></ReviewItem>)
          }
        </div>
        <div className='order-container'>
          <Cart cart={cart}>
            <Link to="/shipment">
              <button >Proceed CheckOut</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;