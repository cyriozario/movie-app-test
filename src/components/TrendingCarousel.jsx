import React from "react";
import Slider from "react-slick";
import "../styles/TrendingCarousel.css";

function TrendingCarousel() {
  const images = [
    {
      title: "Aladdin",
      img: "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg",
    },
    {
      title: "Moana",
      img: "https://cdn.shopify.com/s/files/1/0420/1044/3928/products/00717Onward_Blackstone__Rounded.png?v=1648034387",
    },
    {
      title: "Good Dinosaur",
      img: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713824139671-D9DAKEPKQFJJZ9VS6OOF/23_luca.jpg?format=500w",
    },
    {
      title: "Luca",
      img: "https://lumiere-a.akamaihd.net/v1/images/image_8eba0e1a.jpeg?region=0,0,540,810&width=480",
    },
    {
      title: "Tangled",
      img: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1732208733077-CRU9LRR6F0RQLOY1E06Z/ELIO_Teaser_2nd_Intro_1s_v4.0_A_Mech11.jpg",
    },
    {
      title: "Coco",
      img: "https://mousetrapnews.com/wp-content/uploads/2024/01/Chemo-Disney-Movie-1024x1024.png",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1440, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 540, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="slider-wrapper">
      <p>Trending Movies</p>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="carousel-container">
            <img className="carousel-image" src={item.img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TrendingCarousel;
