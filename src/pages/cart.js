import { connect } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart = ({ state }) => {
  const { cart } = state;
  return (
    <div className="cart-content">
      <div className="cart-left-s">
        <div className="titles">
          <h1>Shopping Cart</h1>
          <span>{cart.length} Items</span>
        </div>
        <div className="cat-prd">
          <span className="f-sp">PRODUCT DETAILS</span>
          <span className="s-sp">QUANTITY</span>
          <span className="x-sp">PRICE</span>
          <span className="x-sp">TOTAL</span>
        </div>
        {cart.length < 1 ? (
          <h2>Cart Is Empty!</h2>
        ) : (
          cart.map((cartItem) => {
            return (
              <>
                <div className="cartItem">
                  <div className="prod-inf f-sp">
                    <div className="cartImg">
                      <img src={cartItem.img} alt="" />
                    </div>
                    <h2>{cartItem.name}</h2>
                    <h4>{cartItem.color}</h4>
                    <button>Remove</button>
                  </div>
                  <div className="prod-inf s-sp">
                    <AiOutlineMinus className="t-m" />
                    <h2>{cartItem.amount}</h2>
                    <AiOutlinePlus className="t-m" />
                  </div>
                  <div className="prod-inf x-sp">
                    <h2>${cartItem.price}</h2>
                  </div>
                  <div className="prod-inf x-sp">
                    <h2>${cartItem.price}</h2>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartReducer: state }) => {
  return { state };
};

export default connect(mapStateToProps)(Cart);
