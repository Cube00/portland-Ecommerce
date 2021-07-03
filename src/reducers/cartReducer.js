import { ADD_ITEM } from "./action";

const defaultState = {
  cart: [],
  cartItemIds: [],
  total: "",
};

const cartReducer = (state = defaultState, action) => {
  if (action.type === ADD_ITEM) {
    if (!state.cartItemIds.includes(action.payload.id)) {
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartItemIds: [...state.cartItemIds, action.payload.id],
      };
    } else {
      const newItem = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: newItem };
    }
  }
  return state;
};

export default cartReducer;
