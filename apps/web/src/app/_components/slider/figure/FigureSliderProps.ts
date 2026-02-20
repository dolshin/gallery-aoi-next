import type { Settings } from 'react-slick';
import type { FigureSliderItemType } from './item';

export type FigureSliderProps = {
  items: FigureSliderItemType[];
  width: number;
  height: number;
  maxWidth?: number;
  settings?: Settings;
  className?: string;
};
