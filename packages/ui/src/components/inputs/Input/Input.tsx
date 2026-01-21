'use client';
import { Input as InputBase } from '@base-ui/react/input';
import type { InputProps } from './InputProps';
import clsx from 'clsx';
import * as styles from './Input.css';

/**
 * インプットコンポーネント
 */
export const Input = ({ className, ref, name, ...props }: InputProps) => (
  <InputBase
    name={name}
    className={clsx(styles.input, className)}
    {...props}
    ref={ref}
  />
);
