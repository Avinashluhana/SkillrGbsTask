import React from "react";
import "./Components/Footer.css";
const Footer = () => {
  return (
    <div className="footer-body">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="heading-section">
              <img src="./images/5.png" alt="image" />
              <h1 className="footer-heading">Follow Skillr</h1>
            </div>

            <div className="links">
              <p>Telegram:https://t.me/skillrCoin</p>
              <p>Telegram:https://t.me/skillrCoin</p>
              <p>Telegram:https://t.me/skillrCoin</p>
              <p>Telegram:https://t.me/skillrCoin</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div class="d-grid gap-4 col-6 mx-auto">
              <button class="btn btn-success footer-button" type="button">
                Join Private Sale Whitelist
              </button>
              <button class="btn btn-success footer-button" type="button">
                Skillr Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
