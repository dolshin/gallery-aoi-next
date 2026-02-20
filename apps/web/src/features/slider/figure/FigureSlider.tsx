'use client';
import { Slider } from '@/components/Slider';
import { FigureSliderItem } from './item';
import type { FigureSliderItemType } from './item';
import { useCallback } from 'react';
import * as styles from './FigureSlider.css';
import type { FigureSliderProps } from './FigureSliderProps';
import clsx from 'clsx';

export const FigureSlider = ({
  items,
  width,
  height,
  maxWidth,
  settings,
  className,
}: FigureSliderProps) => {
  const renderItem = useCallback(
    (item: FigureSliderItemType) => {
      return (
        <FigureSliderItem
          src={item.src}
          alt={item.alt}
          width={width}
          height={height}
          maxWidth={maxWidth}
          caption={item.caption}
        />
      );
    },
    [height, maxWidth, width],
  );

  const getKey = useCallback((item: FigureSliderItemType) => {
    return item.src;
  }, []);

  return (
    <Slider<FigureSliderItemType>
      settings={settings}
      className={clsx(styles.sliderWrapper, className)}
      sliderItems={items}
      getKey={getKey}
      renderItem={renderItem}
    />
  );
};
