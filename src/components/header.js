import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { connect } from "react-redux";

const Header = ({ state }) => {
  return (
    <>
      <header>
        <div className="dis-x">
          <div className="block-1h">
            <button className="menu-burg">
              <HiOutlineMenuAlt1 />
            </button>
            <div className="logo">Portland</div>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/devices">Devices</Link>
              </li>
              <li>
                <Link to="/delivery">Delivery & Payment</Link>
              </li>
              <li>
                <Link to="/guarantee">Guarantee</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>
          <div className="block-1h">
            <Link to="/cart">
              <div className="shopping-cart-tool">
                <button className="cart-btn">
                  <RiShoppingCart2Fill />
                </button>
                <span className="t-sp">CART</span>
                <span className="num">{state.cart.length}</span>
              </div>
            </Link>
            <button className="sign-in">SIGN IN</button>
          </div>
        </div>
      </header>
      <div className="header-menu">
        <div className="block-2h">
          <div className="menu">
            <ul>
              <li>
                <Link to="/">TOP SALES</Link>
              </li>
              <li>
                <Link to="/">BRAND FOCUS</Link>
              </li>
              <li>
                <Link to="/">HI-TECH</Link>
              </li>
              <li>
                <Link to="/">BEST SELLERS</Link>
              </li>
              <li>
                <Link to="/">PROJECTS</Link>
              </li>
            </ul>
          </div>
          <div className="search">
            <li>
              <Link to="/support">SUPPORT</Link>
            </li>
            <form className="search-form">
              <button className="searchBtn">
                <BiSearch />
              </button>
              <input
                className="search-input"
                type="text"
                id="search-input"
                placeholder="I`m Looking for ..."
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ cartReducer: state }) => {
  return { state };
};

export default connect(mapStateToProps)(Header);
