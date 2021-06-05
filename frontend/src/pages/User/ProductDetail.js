import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import './ProductDetail.css';

const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} className="fa-lg" />
const wishListIcon = <FontAwesomeIcon icon={faHeart} className="fa-lg" />

const ProductDetail = () => {
    return (
        <div className="container pdetail">
            <div className="pdetail__left">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"></img>
                <button className="wishlist-button">{wishListIcon}</button>
            </div>
            <div className="pdetail__right">
                <h2><b>Card title</b></h2>
                <p>Vestibulum purus.</p>
                
                <div>
                    <select>
                        <option key="1">1</option>
                        <option key="2">2</option>
                        <option key="3">3</option>
                        <option key="4">4</option>
                    </select>

                    <span>Rs. 200</span>
                </div>
                

                <button className="addtocart-button">Add to Cart {cartIcon}</button>
                <table>
                    <tr>
                        <th>Specifications</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>something</td>
                        <td>nothing</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ProductDetail
