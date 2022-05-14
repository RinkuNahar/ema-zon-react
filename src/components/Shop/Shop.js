import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import PageTitle from '../PageTitle/PageTitle'

const Shop = () => {
  

    const [cart, setCart] = useState([]);

    const [pageCount, setPageCount] = useState(1);

    const [page, setPage] = useState(0);

    const [size, setSize] = useState(10);

    const[products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[page, size]);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct._id);
    }
    return (
        <div>
            <PageTitle title="Shop"></PageTitle>
            <div className='main'>
                <div className='shop-container'>
                    {
                        products.map(product => <Product
                            product={product}
                            key={product._id}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)

                    }
                    <div className='pagination'>
                        {
                            [...Array(pageCount).keys()].map(number => <button className={page === number ? 'selected' : ''} onClick={()=>setPage(number)}>{number+1}</button>)
                        }
                        <select onChange={e => setSize(e.target.value)}>
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                        </select>
                    </div>
                </div>
                <div className='order-container'>
                    <Cart cart={cart}>
                        <Link to="/orders" className='review-button'>
                            <button>Review Items</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;