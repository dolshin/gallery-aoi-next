import type { FigureSliderItemProps } from './FigureSliderItemProps';
import { NextImage } from '@/components/Image/next';

export const FigureSliderItem = ({
  src,
  alt,
  width,
  height,
  maxWidth = width,
  caption,
}: FigureSliderItemProps) => {
  return (
    <figure
      style={{
        margin: '0',
        overflow: 'hidden',
        maxWidth: `${maxWidth}px`,
        borderRadius: '16px',
      }}
    >
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        asFigure={false}
      />
      {caption && (
        <figcaption
          style={{
            letterSpacing: '0.08em',
            paddingLeft: '8px',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
