import CartItem from '../../components/CartItem';
import './Cart.css';


const Cart = () => {
    return (
        <div className="cart container">
            <h2>Shopping Cart</h2>

            <div className="cart__container">
                <div className="cart__items">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className="cart__summary">
                    <div className="cart__info">
                        <p>Subtotal () items</p>
                        <p>Rs.</p>
                    </div>
                    <div>
                        <button className="black-button">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
