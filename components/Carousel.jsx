// components/Carousel.js
import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="image1.jpg" alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src="image2.jpg" alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;