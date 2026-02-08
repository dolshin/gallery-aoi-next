'use client';

import Link from 'next/link';
import { Button } from '@dolshin/ui';
import type { LinkButtonProps } from './LinkButtonProps';
import * as styles from './LinkButton.css';
import { ChevronLeft, ChevronRight } from '@dolshin/icons/ui';

/**
 * LinkButton コンポーネント
 */
export function LinkButton({
  href,
  replace,
  prefetch,
  scroll,
  arrow = 'none',
  size = 'md',
  disabled,
  loading,
  children,
  ...buttonProps
}: LinkButtonProps) {
  // disabled / loading 時は遷移させない
  if (process.env.NODE_ENV !== 'production') {
    if (disabled || loading) {
      console.warn('LinkButton: disabled or loading prevents navigation');
    }
  }

  return (
    <Button
      asChild
      size={size}
      leftIcon={arrow === 'left' && <ChevronLeft />}
      rightIcon={arrow === 'right' && <ChevronRight />}
      aria-disabled={disabled || !!loading}
      {...buttonProps}
    >
      <Link
        className={styles.link}
        href={href}
        replace={replace}
        prefetch={prefetch}
        scroll={scroll}
        tabIndex={disabled || loading ? -1 : undefined}
        onClick={(e) => {
          if (disabled || loading) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        {children}
      </Link>
    </Button>
  );
}
