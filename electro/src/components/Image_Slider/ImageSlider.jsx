import React from 'react';
import "./ImageSlider.css";
import { useState, useRef, useEffect } from 'react';

const delay = 2500;

const images = [
  {
    id: 1,
    url: "https://source.unsplash.com/300x300/?perth,australia"
  },
  {
    id: 2,
    url: "https://source.unsplash.com/300x300/?west-australia"
  },
  {
    id: 3,
    url: "https://source.unsplash.com/300x300/?perth"
  },
  {
    id: 4,
    url: "https://source.unsplash.com/300x300/?quokka,perth"
  },
  {
    id: 5,
    url: "https://source.unsplash.com/300x300/?margaretriver,australia"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
  }
];

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <h1>Services At Your Door</h1>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, idx) => (
          <div
            className="slide"
            key={idx}
            style={{ backgroundImage: `url(${image.url})` }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
