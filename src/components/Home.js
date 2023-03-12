import React from "react";
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <div>
      <Navigation />
      <section id="header-section">
        <div className="header-title">
          <h1>Welcome to Bus Reservation System</h1>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6"></div>

            <div className="col-lg-6 ">
              <SearchForm/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
