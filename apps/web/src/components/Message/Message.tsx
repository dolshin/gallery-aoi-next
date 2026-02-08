import clsx from 'clsx';
import type { MessageProps } from './MessageProps';
import * as styles from './Message.css';

export const Message = ({
  children,
  variant = 'info',
  className,
}: MessageProps) => {
  if (!children) return null;
  return (
    <div data-variant={variant} className={clsx(styles.message, className)}>
      {children}
    </div>
  );
};
