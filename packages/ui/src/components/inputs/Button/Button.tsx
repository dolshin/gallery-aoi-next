'use client';
import { Slot } from '@radix-ui/react-slot';
import { buttonRecipe } from './Button.css';
import type { ButtonProps } from './ButtonProps';
import clsx from 'clsx';

/**
 * ボタンコンポーネント
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
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

  const Children = (
    <span>
      {/* 左アイコン */}
      {leftIcon && <span>{leftIcon}</span>}
      {/* ボタンラベル */}
      {children}
      {/* 右アイコン */}
      {rightIcon && <span>{rightIcon}</span>}
    </span>
  );

  return (
    <Component
      {...buttonProps}
      className={clsx(
        buttonRecipe({ variant, size, fullWidth, loading }),
        className,
      )}
      {...props}
    >
      {Children}
    </Component>
  );
}
