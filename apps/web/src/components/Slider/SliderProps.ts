import React from 'react';
import { type Settings } from 'react-slick';

export type SliderProps<T> = {
  sliderItems: T[];
  renderItem: (item: T) => React.ReactNode;
  getKey: (item: T) => React.Key;
  settings?: Settings;
  className?: string;
};
