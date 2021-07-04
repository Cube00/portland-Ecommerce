import { ADD_ITEM, REMOVE_ITEM, INCREASE, DECREASE } from "./action";

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
  if (action.type === REMOVE_ITEM) {
    const removeItem = state.cart.filter((e) => {
      return e.id !== action.payload.id;
    });
    return {
      ...state,
      cart: removeItem,
      cartItemIds: removeItem,
    };
  }
  if (action.type === INCREASE) {
    const increasedItem = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: increasedItem };
  }
  if (action.type === DECREASE) {
    const decreasedItem = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        if (item.amount > 1) item = { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    return { ...state, cart: decreasedItem };
  }
  return state;
};

export default cartReducer;
