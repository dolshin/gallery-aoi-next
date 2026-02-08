import type { ButtonProps } from '@dolshin/ui';

type ArrowType = 'right' | 'left' | 'none';

export type LinkButtonProps = Omit<
  ButtonProps,
  'asChild' | 'type' | 'onClick'
> & {
  href: string;
  arrow?: ArrowType;
  replace?: boolean;
  prefetch?: boolean;
  scroll?: boolean;
};
