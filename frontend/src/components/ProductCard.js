import React from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const wishlistIcon = <FontAwesomeIcon icon={faHeart} className="fa-lg"/>
const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} className="fa-lg"/>

const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="img-container">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"></img>
                <button className="wishlist-button">{wishlistIcon}</button>
            </div>
            
            <Link to="/product/id" className="cartitem__name">
                <p><b>product title</b></p>
            </Link>
            <p>Vestibulum purus.</p>
            <div className="card-footer">
                <span>Rs. 200</span>
                <button className="addtocart-button">Add to Cart {cartIcon}</button>
            </div>
            
        </div>
    )
}

export default ProductCard
