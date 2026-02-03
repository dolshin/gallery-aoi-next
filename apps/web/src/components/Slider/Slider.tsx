'use client';
import { useCallback, useRef } from 'react';
import SlickSlider, { type Settings } from 'react-slick';
import { ChevronLeft, ChevronRight } from '@dolshin/icons/ui';
import * as styles from './Slider.css';
import clsx from 'clsx';
import type { SliderProps } from './SliderProps';

export const Slider = <T,>({
  sliderItems,
  renderItem,
  getKey,
  settings,
  className,
}: SliderProps<T>) => {
  const sliderRef = useRef<SlickSlider | null>(null);

  const PreviousSlide = useCallback(() => {
    sliderRef.current?.slickPrev();
  }, []);

  const NextSlide = useCallback(() => {
    sliderRef.current?.slickNext();
  }, []);

  const CustomPrevArrow = () => {
    return (
      <div className="slider-arrow slider-prev" onClick={PreviousSlide}>
        <ChevronLeft size={13} color="#333" />
      </div>
    );
  };
  const CustomNextArrow = () => (
    <div className="slider-arrow slider-next" onClick={NextSlide}>
      <ChevronRight size={13} color="#333" />
    </div>
  );

  const defaultSettings: Settings = {
    dots: true,
    infinite: false,
    arrows: true,
    appendDots: (dots) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomPrevArrow />
        <div className="slider-dots">{dots}</div>
        <CustomNextArrow />
      </div>
    ),
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={clsx(styles.sliderWrapper, className)}>
      <SlickSlider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...{ ...defaultSettings, ...settings }}
      >
        {sliderItems.map((item) => (
          <div key={getKey(item)}>{renderItem(item)}</div>
        ))}
      </SlickSlider>
    </div>
  );
};
