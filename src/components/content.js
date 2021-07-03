import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GET_PRODUCT, ADD_ITEM } from "../reducers/action";
import Item from "./item";

const Content = ({ getProducts, store, addItem }) => {
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <section className="content-items">
        {store.items &&
          store.items.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                currentId={currentId}
                setCurrentId={setCurrentId}
                addItem={() => {
                  addItem(item);
                }}
              />
            );
          })}
      </section>
    </>
  );
};

const mapStateToProps = ({ contentStore: store, cartReducer: cart }) => {
  return { store, cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch({ type: GET_PRODUCT });
    },
    addItem: (item) => {
      dispatch({ type: ADD_ITEM, payload: item });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
