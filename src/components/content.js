import { useEffect } from "react";
import { connect } from "react-redux";
import { GET_PRODUCT } from "../reducers/action";
import Item from "./item";

const Content = ({ getProducts, store }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <section className="content-items">
        {store.items &&
          store.items.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
      </section>
    </>
  );
};

const mapStateToProps = ({ contentStore: store }) => {
  return { store };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch({ type: GET_PRODUCT });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
