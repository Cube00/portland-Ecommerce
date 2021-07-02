import { GET_PRODUCT } from "./action";
import { data } from "../data";

const defaultStore = {
  items: "",
};

const contentStore = (state = defaultStore, action) => {
  if (action.type === GET_PRODUCT) {
    return { ...state, items: data };
  }
  return state;
};

export default contentStore;
