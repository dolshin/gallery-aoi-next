export type MessageVariant = 'error' | 'success' | 'info' | 'warning';

export type MessageProps = {
  children: React.ReactNode;
  variant?: MessageVariant;
  className?: string;
};
