import Image from 'next/image';
import clsx from 'clsx';
import type { NextImageProps } from './NextImageProps';
import * as styles from './NextImage.css';

/**
 * Next.js の Image コンポーネントをラップしたコンポーネント
 * 画像の比率を維持しつつ、親要素の最大幅に合わせてレスポンシブに表示する
 */
export function NextImage({
  src,
  alt,
  width,
  height,
  maxWidth = width,
  asFigure = true,
  className,
  ...imageProps
}: NextImageProps) {
  const image = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={
        maxWidth ? `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px` : '100vw'
      }
      className={styles.image}
      {...imageProps}
    />
  );

  if (!asFigure) {
    return image;
  }

  return (
    <figure className={clsx(styles.wrapper, className)} style={{ maxWidth }}>
      {image}
    </figure>
  );
}
