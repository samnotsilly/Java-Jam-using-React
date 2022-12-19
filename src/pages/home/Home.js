import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="homehero"></div>
      <h2>Follow the Winding Road to JavaJam.</h2>
      <p>
        We're a little out of the way, but take a drive in the country down
        Garrett Bay Road to JavaJam today! Indulge in our locally roasted
        free-trade coffee and home-made pastries. You’ll feel right at home at
        JavaJam!
      </p>
      <p>
        Friendly and eclectic &ndash; JavaJam Coffee Bar is the perfect place to
        take a break, enjoy a refreshing beverage, and have a snack or light
        meal.
      </p>
      <h3>JavaJam Coffee Bar features:</h3>
      <ul>
        <li>Specialty Coffee and Organic Tea</li>
        <li>Bagels, Muffins, and Gluten-free Pastries</li>
        <li>Organic Salads</li>
        <li>Music and Poetry Readings</li>
        <li>Open Mic Night</li>
      </ul>
      <div>
        12010 Garrett Bay Road
        <br />
        Ellison Bay, WI 54210
        <br />
        <a id="mobile" href="tel:888-555-5555">
          888-555-5555
        </a>
        <span id="desktop">888-555-5555</span>
      </div>
    </>
  );
};

export default Home;
