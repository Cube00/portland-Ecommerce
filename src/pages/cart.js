import { useState } from "react";
import { connect } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { REMOVE_ITEM, INCREASE, DECREASE } from "../reducers/action";

const Cart = ({ state, remove, increase, decrease }) => {
  const [drop, setDrop] = useState(false);
  const [del, setDel] = useState("Standard Delivery - 5 $");
  const [priceDel, setPriceDel] = useState(5);

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
          <h2 className="emptycart">Cart Is Empty!</h2>
        ) : (
          cart.map((cartItem) => {
            return (
              <div key={cartItem.id} className="cartItem">
                <div className="prod-inf f-sp">
                  <div className="cartImg">
                    <img src={cartItem.img} alt="" />
                  </div>
                  <h2>{cartItem.name}</h2>
                  <h4>{cartItem.color}</h4>
                  <button onClick={() => remove(cartItem.id)}>Remove</button>
                </div>
                <div className="prod-inf s-sp">
                  <AiOutlineMinus
                    className="t-m"
                    onClick={() => decrease(cartItem.id)}
                  />
                  <h2>{cartItem.amount}</h2>
                  <AiOutlinePlus
                    className="t-m"
                    onClick={() => increase(cartItem.id)}
                  />
                </div>
                <div className="prod-inf x-sp">
                  <h2>${cartItem.price}</h2>
                </div>
                <div className="prod-inf x-sp">
                  <h2>${(cartItem.price * cartItem.amount).toFixed(2)}</h2>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="cart-right-s">
        <div className="titles">
          <h1>Order Summary</h1>
        </div>
        <div className="it-s">
          <span>ITEMS {cart.length}</span>
          <span>
            $
            {cart.length > 0 &&
              cart
                .reduce((acc, curr) => {
                  return (acc += curr.price * curr.amount);
                }, 0)
                .toFixed(2)}
          </span>
        </div>
        <div className="inps">
          <h3>SHIPPING</h3>
          <div
            onClick={() => {
              if (drop === false) {
                setDrop(true);
              } else {
                setDrop(false);
              }
            }}
            className="ship-type"
          >
            <span>{del}</span>
          </div>
          <div
            onClick={() => {
              setDrop(false);
            }}
            className={drop ? "drop-down dropped" : "drop-down"}
          >
            <div
              className="cat-del"
              onClick={() => {
                setDel("Standard Delivery - 5 $");
                setPriceDel(5);
              }}
            >
              Standard Delivery - 5 $
            </div>
            <div
              className="cat-del"
              onClick={() => {
                setDel("Premium Delivery - 10 $");
                setPriceDel(10);
              }}
            >
              Premium Delivery - 10 $
            </div>
          </div>
        </div>
        <div className="inps bordered">
          <h3>PROMO CODE</h3>
          <input
            className="promo-input"
            type="text"
            id="promo"
            placeholder="enter your promo code"
          />
          <button className="apply">APPLY</button>
        </div>
        <div className="total-cost">
          <span>TOTAL COST</span>$
          {cart.length > 0 &&
            cart
              .reduce((acc, curr) => {
                console.log(acc);
                return (acc += curr.price * curr.amount);
              }, priceDel)
              .toFixed(2)}
        </div>
        <button className="checkout">CHECKOUT</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartReducer: state }) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => {
      dispatch({ type: REMOVE_ITEM, payload: { id } });
    },
    increase: (id) => {
      dispatch({ type: INCREASE, payload: { id } });
    },
    decrease: (id) => {
      dispatch({ type: DECREASE, payload: { id } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
