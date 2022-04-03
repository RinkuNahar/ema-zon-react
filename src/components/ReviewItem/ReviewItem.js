import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const {name, img, price,shipping, quantity} = props.product;
   const {product, handleRemoveProduct} =props;
    return (
        <div className='review-item'>
            <div>
            <img src={img} alt="" />
            </div>

           <div className='details-container'>
         <div>
         <h3 className='product-name' title={name}>Name: {name.length > 20 ? name.slice(0,20) + '...' : name}</h3>
         <p>price: {price}</p>
         <p>Shipping : {shipping}</p>
         <p>Quantity: {quantity}</p>
         </div>
         <div className='delete-button'>
             <button onClick={()=>handleRemoveProduct(product)}>Delete<FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon> </button>
         </div>
           </div>
         
        </div>
    );
};

export default ReviewItem;