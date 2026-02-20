'use client';
import { Slot } from '@radix-ui/react-slot';
import { buttonRecipe } from './Button.css';
import type { ButtonProps } from './ButtonProps';
import clsx from 'clsx';
import { Spinner } from '@dolshin/icons/ui';
import * as styles from './Button.css';

/**
 * ボタンコンポーネント
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  loadingPosition = 'center',
  loadingIndicator = <Spinner />,
  fullWidth = false,
  asChild = false,
  type = 'button',
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  if (asChild && disabled) {
    console.warn('Button: disabled is not supported with asChild');
  }

  const buttonProps = !asChild ? { type, disabled: disabled || !!loading } : {};

  const Component = asChild ? Slot : 'button';

  const LoadingIndicator = (
    <span className={styles.loadingWrapper}>
      <span className={styles.loadingIndicator}>{loadingIndicator}</span>
    </span>
  );

  return (
    <Component
      {...buttonProps}
      {...props}
      aria-busy={loading || undefined}
      aria-disabled={disabled || loading || undefined}
      data-loading={loading || undefined}
      data-loading-position={loadingPosition}
      className={clsx(
        buttonRecipe({
          variant,
          size,
          fullWidth,
          loading,
        }),
        className,
      )}
    >
      <span className={styles.content}>
        {/* ===== Left ===== */}
        <span className={styles.icon}>
          {leftIcon ||
            (loading && loadingPosition === 'left' && <IconPlaceholder />)}
        </span>

        {/* ===== Spinner (left / center) ===== */}
        {loading && loadingPosition !== 'right' && LoadingIndicator}

        {/* ===== Label ===== */}
        <span className={styles.buttonLabel}>{children}</span>

        {/* ===== Spinner (right) ===== */}
        {loading && loadingPosition === 'right' && LoadingIndicator}

        {/* ===== Right ===== */}
        <span className={styles.icon}>
          {rightIcon ||
            (loading && loadingPosition === 'right' && <IconPlaceholder />)}
        </span>
      </span>
    </Component>
  );
}

function IconPlaceholder() {
  return <span className={styles.iconPlaceholder} />;
}
