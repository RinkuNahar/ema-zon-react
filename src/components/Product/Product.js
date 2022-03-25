import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './Product.css'

const Product = (props) => {
     const{name,img,price,seller,ratings} =  props.product;
   
    return (
        <div className='product-detail'>
            <img className='product-img' src={img} alt="" />
          <div className='product-info'>
          <p className='product-name'>{name}</p>
            <p >{price}</p>
            <p >Seller: {seller}</p>
            <p > Ratings: {ratings}</p>
          </div>
        <button onClick={()=>props.handleAddToCart(props.product)}>Add To Cart</button>
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </div>
    );
};

export default Product;