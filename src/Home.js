import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
     

        <div className="home__row">
          <Product
            id="1"
            name="Potato"
            price={30}
            vendor="Nagpur farms"
            image="potato.jpg"
            category="vegetables"
          />
          <Product
            id="2"
            name="Banana"
            price={50}
            vendor="Himchal Pvt Ltd"
            image="/banana.jpg"
            category="fruits"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            name="DrumStick"
            price={20}
            vendor="Mallikarjuna farms"
            image="/drumstick.jpg"
            category="vegetables"
          />
          <Product
            id="4"
            name="Orange"
            price={55}
            vendor="Nagpur farms"
            image="/orange.jpg"
            category="fruits"
          />
          <Product
            id="5"
            name="Apple"
            price={60}
            vendor="Mallikarjuna farms"
            image="/apple.jpg"
            category="fruits"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            name="Grapes"
            price={50}
            vendor="Himchal Pvt Ltd"
            image="/grapes.jpg"
            category="fruits"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
