import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

interface Image {
  thumbnailUrl: string;
  title: string;
}

const NewsSlider: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setImages(response.data.slice(0, 20));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      updateSliderPosition(currentIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const updateSliderPosition = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[index].clientWidth + 30;
      sliderRef.current.style.transform = `translateX(-${
        index * slideWidth
      }px)`;
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        updateSliderPosition(newIndex);
        return newIndex;
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        updateSliderPosition(newIndex);
        return newIndex;
      });
    }
  };

  return (
    <div className="slider">
      <div id="slider" className="slider__track" ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className="slider__track__slide">
            <img
              src={image.thumbnailUrl}
              alt={image.title}
              className="slider__track__slide__image"
            />
            <h3 className="slider__track__slide__title">{image.title}</h3>
          </div>
        ))}
      </div>
      <div className="slider__controls">
        <button
          id="prev"
          className="slider__controls__button"
          aria-label="Previous slide"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &lArr;
        </button>
        <button
          id="next"
          className="slider__controls__button"
          aria-label="Next slide"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
        >
          &rArr;
        </button>
      </div>
    </div>
  );
};

export default NewsSlider;
