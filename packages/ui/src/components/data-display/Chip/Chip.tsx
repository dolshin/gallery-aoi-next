'use client';
import { clsx } from 'clsx';
import { chipRecipe } from './Chip.css';
import type { ChipProps } from './ChipProps';

/**
 * チップコンポーネント
 */
export const Chip = ({
  children,
  variant = 'default',
  size = 'md',
  clickable = false,
  onClick,
  ref,
  className,
}: ChipProps) => {
  return (
    <span
      ref={ref}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={clickable ? onClick : undefined}
      className={clsx(
        chipRecipe({
          variant,
          size,
          clickable,
        }),
        className,
      )}
    >
      {children}
    </span>
  );
};

Chip.displayName = 'Chip';
