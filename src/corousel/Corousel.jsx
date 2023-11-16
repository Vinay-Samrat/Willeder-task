// CarouselComponent.js
import React, { useState, useEffect } from "react";
import "../corousel/corousel.scss"; // Import your SCSS file
import image1 from "../assets/emile-perron-xrVDYZRGdw4-unsplash.png";
import image2 from "../assets/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.png";
import image3 from "../assets/james-harrison-vpOeXr5wmR4-unsplash (1).svg";
import union from "../assets/Union.svg";

const carouselData = [
  { image: image1, logoText: "Logo 1", description: "Description 1" },
  { image: image2, logoText: "Logo 2", description: "Description 2" },
  { image: image3, logoText: "Logo 3", description: "Description 3" },
];

const fixedText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.e";

const CarouselComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselData.length);
    }, 1000); // Change the interval time as needed (currently set to 1 second)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselData.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <div className="fixed-text">{fixedText}</div>
        <img
        className="currentimage"
          src={carouselData[currentImage].image}
          alt={`Image ${currentImage + 1}`}
        />
        <div className="centered-text">
          <h1>{carouselData[currentImage].logoText}</h1>
          <p>{carouselData[currentImage].description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
