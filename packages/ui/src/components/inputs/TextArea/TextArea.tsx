import type { TextAreaProps } from './TextAreaProps';
import { textAreaRecipe } from './TextArea.css';
import clsx from 'clsx';
/**
 * TextArea コンポーネント
 */
export const TextArea = ({
  name,
  resize = 'vertical',
  fullWidth = true,
  className,
  ref,
  ...props
}: TextAreaProps) => {
  return (
    <textarea
      name={name}
      className={clsx(textAreaRecipe({ resize, fullWidth }), className)}
      ref={ref}
      {...props}
    />
  );
};
