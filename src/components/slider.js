import poster1 from "../assets/images/poster.png";

const Slider = () => {
  return (
    <>
      <section className="slider">
        <img className="slider-cover" src={poster1} alt="/" />
        <div className="slider-content">
          <div className="slider-info">
            <h2>Iphone 11 Pro Max 128GB</h2>
            <h4>
              Get up to $180 off a new iPhone 11 when you trade in your current
              iPhone. Personal setup available. Buy now with free delivery.
            </h4>
            <button className="buyBtn">BUY NOW</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
