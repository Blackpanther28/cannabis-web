import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>Cannabis chain a farm the world's greenest coin</h1>
      <p>
        A 100% decentralized and eco-friendly blockchain that enables everyone
        to farm by using their free disk storage. We think farming is the future
        of Cryptocurrencies. Cannabis’s blockchain implements Proof of Space and
        Time (PoST) instead of Proof of Work (PoW), drastically reducing energy
        consumption.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <a
          href="https://github.com/CannabisChain"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-mobile"
        >
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            View on Github
          </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
