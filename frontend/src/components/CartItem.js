import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';

const removeItemIcon = <FontAwesomeIcon icon={faTimesCircle} className="fa-lg" />

const CartItem = () => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
            </div>
            <Link to="/product/id" className="cartitem__name">
                Some product name
            </Link>

            <p>Rs. 3000</p>
            <select>
                <option key="1">1</option>
                <option key="2">2</option>
                <option key="3">3</option>
                <option key="4">4</option>
            </select>

            {removeItemIcon}
        </div>
    )
}

export default CartItem
