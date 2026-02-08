import './Spinner.css';
import type { SpinnerProps } from './SpinnerProps';
import clsx from 'clsx';

export function Spinner({
  size = 20,
  strokeWidth = 2,
  decorative = true,
  title,
  className,
}: SpinnerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={clsx('ui-spinner', className)}
      role="img"
      aria-hidden={decorative || undefined}
      aria-label={!decorative ? title : undefined}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="42"
        strokeDashoffset="14"
      />
    </svg>
  );
}
