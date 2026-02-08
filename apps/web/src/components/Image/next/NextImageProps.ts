import type { ImageProps } from 'next/image';

export type NextImageProps = Omit<ImageProps, 'width' | 'height' | 'fill'> & {
  /** 元画像の width（比率計算用） */
  width: number;
  /** 元画像の height（比率計算用） */
  height: number;
  /** 親の最大幅（任意） */
  maxWidth?: number;
  /** figure を使うかどうか */
  asFigure?: boolean;
};
