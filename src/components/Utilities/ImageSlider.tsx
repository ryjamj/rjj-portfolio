import React, { useState, useEffect } from "react";
import "./ImageSlider.scss";
import { Box } from "@mui/material";
import { act } from "react-dom/test-utils";

interface ImageSliderProps {
  children: React.ReactNode[];
}

export default function ImageSlider({ children }: ImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideDone, setSlideDone] = useState<boolean>(true);
  const [timeID, setTimeID] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const AutoPlayStop = () => {
    if (timeID) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  const slideNext = () => {
    if (activeIndex >= children.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const slidePrev = () => {
    if (activeIndex <= 0) {
      setActiveIndex(children.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <Box className="slider-container" onMouseEnter={AutoPlayStop} onMouseLeave={AutoPlayStart}>
      {children.map((item, index) => {
        return (
          <Box className={`slider-item slider-item-active-${activeIndex}`} key={index}>
            {item}
          </Box>
        );
      })}

      <Box className="slider-container-links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={activeIndex === index ? "slider-container-links-small slider-container-links-small-active" : "slider-container-links-small"}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </Box>
      <button
        className="slider-btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {">"}
      </button>
      <button
        className="slider-btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {"<"}
      </button>
    </Box>
  );
}
