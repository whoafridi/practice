import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // calculate total quantity
    let totalQuantity = cart.length;
    // calculate gros salary
    let total = cart.reduce((previous, current) => previous+current.salary,0);
    
    return (
        <div className="cart-container">
            <h3><i class="fas fa-user-alt"></i> Total Researcher</h3>
            <h5>Total selected : {totalQuantity}</h5>
            <p>Gross salary : {total}</p>
            {
                cart.map(c => <h5 ><i class="fas fa-check"></i> {c.name}</h5>) 
            }
        </div>
    );
}

export default Cart;