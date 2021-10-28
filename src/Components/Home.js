import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-class">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 text">
            <div className="home-column">
              <h1 className="heading mx-5">Skillr</h1>
              <p className="mx-5">
                <strong>
                  The First Complete Blockchain Services Booking & Promotion Hub
                </strong>
                <br />
                The best Blockchain services booking-hub. Find NFT, blockchain
                developers and Crypto Influencers all in one place, with all
                services payable in Crypto. Whether you are looking to develop,
                design, deploy, promote, advertise or manage your crypto
                project, Skillr provides a comprehensive booking platform to
                match you with the right blockchain service.
              </p>
              <div className="buttons mx-5 mb-5">
                <button
                  type="button"
                  class="btn btn-lg btn-success home-button"
                >
                  Join Whiltelist
                </button>
                <button
                  type="button"
                  class="btn btn-lg btn-success mx-4 home-button"
                >
                  Telegram <i class="fab fa-telegram"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 home-image">
            <img src="./images/BANNER-FINAL.png" />
            <img className="icon-images" src="./images/icon-4.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
