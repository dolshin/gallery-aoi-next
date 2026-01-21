import { useState } from 'react';

type ControlledStoryWrapperProps<T> = {
  value?: T;
  children: (props: {
    value: T;
    onChange: (value: T) => void;
  }) => React.ReactNode;
};

export function ControlledStoryWrapper<T = string>({
  value,
  children,
}: ControlledStoryWrapperProps<T>) {
  const [internalValue, setInternalValue] = useState<T>(value as T);

  return children({
    value: internalValue,
    onChange: setInternalValue,
  });
}
