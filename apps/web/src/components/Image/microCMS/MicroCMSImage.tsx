'use client';
import clsx from 'clsx';
import * as styles from './MicroCMSImage.css';
import type { MicroCMSImageProps } from './MicroCMSImageProps';

export const MicroCMSImage = ({
  src,
  alt,
  width,
  height,
  className,
}: MicroCMSImageProps) => {
  const optimizedUrl = `${src}?q=80&fm=webp`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={optimizedUrl}
      alt={alt}
      width={width}
      height={height}
      className={clsx(styles.image, className)}
      loading="lazy"
    />
  );
};
