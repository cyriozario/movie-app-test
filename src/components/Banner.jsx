import React from "react";
import "../styles/Banner.css";
import TrendingCarousel from "./TrendingCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <header>
          <h1>Monsters, INC.</h1>
        </header>
        <p>
          Animated film that explores the world of Monstropolis, where monsters
          generate their city's power by scaring children at night.
        </p>

        <button className="btn btn-primary" aria-label="Watch Now">
          <span>Watch Now</span>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </div>

      <div className="carousel-wrapper">
        <TrendingCarousel />
      </div>
    </div>
  );
}

export default Banner;
