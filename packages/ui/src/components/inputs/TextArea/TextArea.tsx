import type { TextAreaProps } from './TextAreaProps';
import { textAreaRecipe } from './TextArea.css';
import clsx from 'clsx';
import TextareaAutoSize from 'react-textarea-autosize';
/**
 * TextArea コンポーネント
 */
export const TextArea = ({
  name,
  minRows,
  maxRows,
  resize = 'vertical',
  fullWidth = true,
  className,
  ref,
  ...props
}: TextAreaProps) => {
  return (
    <TextareaAutoSize
      className={clsx(textAreaRecipe({ resize, fullWidth }), className)}
      minRows={minRows}
      maxRows={maxRows}
      ref={ref}
      {...props}
    />
  );
};
