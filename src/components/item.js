import { GrFormClose } from "react-icons/gr";

const Item = ({ item, currentId, setCurrentId }) => {
  const { name, color, price, size, amount, img, id } = item;

  const getCurrent = () => {
    setCurrentId(id);
  };

  return (
    <>
      <div className="item">
        {currentId === id && (
          <button className="rm" onClick={() => setCurrentId("")}>
            <GrFormClose />
          </button>
        )}
        <div
          onClick={() => getCurrent()}
          className={currentId === id ? "item-showf full" : "item-showf"}
        >
          <div className="item-img">
            <img src={img} alt="" />
          </div>
          <div className="item-info">
            <h2>{name}</h2>
            <h4>{color}</h4>
            <h3>${price}</h3>
          </div>
          <div className={currentId === id ? "addit-if show" : "addit-if"}>
            <span>{size}</span>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
