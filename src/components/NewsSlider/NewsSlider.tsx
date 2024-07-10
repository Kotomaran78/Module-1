import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import placeholderImage from '@assets/img/placeholder.png';
import { apiKey } from './apiKey';
import { Article } from './types';
import './NewsSlider.scss';

const NewsSlider: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const apiUrl =
    'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' +
    apiKey;

  const checkImageLink = async (url: string): Promise<boolean> => {
    try {
      const response = await axios.get(url);
      return response.status === 200;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<{ articles: Article[] }>(apiUrl);
        const filteredNews = response.data.articles.filter(
          async (article) =>
            (await checkImageLink(article.urlToImage)) && !article.description.includes('<')
        );
        setNews(filteredNews.slice(0, 20));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [apiUrl]);

  useEffect(() => {
    const handleResize = () => {
      updateSliderPosition(currentIndex);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const updateSliderPosition = (index: number) => {
    if (sliderRef.current) {
      const children = sliderRef.current.children;
      if (children[index]) {
        const slideWidth = children[index].clientWidth + 30;
        sliderRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
      } else {
        console.warn(`Element at index ${index} does not exist`);
      }
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
    if (currentIndex < news.length - 1) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        updateSliderPosition(newIndex);
        return newIndex;
      });
    }
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = placeholderImage;
  };

  return (
    <div className='slider'>
      <div id='slider' className='slider__track' ref={sliderRef}>
        {news.map((article) => (
          <div key={article.title} className='slider__track__slide'>
            <a
              href={article.url}
              target='_blank'
              rel='noopener noreferrer'
              className='slider__track__slide__link'
            >
              <img
                src={article.urlToImage}
                alt={article.title}
                className='slider__track__slide__image'
                onError={handleImageError}
              />
              <h3 className='slider__track__slide__title'>{article.title}</h3>
            </a>
            <p className='slider__track__slide__description'>{article.description}</p>
          </div>
        ))}
      </div>
      <div className='slider__controls'>
        <button
          className='slider__controls__button'
          aria-label='Previous slide'
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &lArr;
        </button>
        <button
          className='slider__controls__button'
          aria-label='Next slide'
          onClick={handleNext}
          disabled={currentIndex === news.length - 1}
        >
          &rArr;
        </button>
      </div>
    </div>
  );
};

export default NewsSlider;
