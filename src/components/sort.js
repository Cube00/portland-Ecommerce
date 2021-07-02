import { IoIosArrowDown } from "react-icons/io";

const Sort = () => {
  return (
    <>
      <div className="sort-block">
        <div className="block-s1">
          <span>SORT BY:</span>
          <div className="sort-category">
            BEST MATCH
            <IoIosArrowDown className="sort-arrow" />
          </div>
        </div>
        <div className="block-s1">
          <span>KEYWORDS:</span>
          <input
            className="k-search"
            type="text"
            id="keywords-search"
            placeholder="Tablet"
          />
          <span className="marg">PRICE:</span>
          <input
            className="price"
            type="text"
            id="min-price"
            placeholder="10"
          />
          <p>-</p>
          <input
            className="price"
            type="text"
            id="max-price"
            placeholder="1000"
          />
          <input className="free-shipping" type="checkbox" id="free-shipping" />
          <label className="fr-sh-s" htmlFor="free-shipping">
            Free shipping
          </label>
        </div>
        <div className="block-s1">
          <span>SHIP TO:</span>
          <div className="sort-category shipping">
            USA
            <IoIosArrowDown className="sort-arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;
