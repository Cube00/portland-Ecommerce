const Item = ({ item }) => {
  const { name, color, price, size, amount, img } = item;

  return (
    <>
      <div className="item">
        <div className="item-img">
          <img src={img} alt="" />
        </div>
        <div className="item-info">
          <h2>{name}</h2>
          <h4>{color}</h4>
          <h3>${price}</h3>
        </div>
      </div>
    </>
  );
};

export default Item;
