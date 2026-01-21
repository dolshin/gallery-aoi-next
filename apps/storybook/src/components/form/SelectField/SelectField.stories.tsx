import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  SelectField,
  type SelectFieldProps,
  type SelectItem,
} from '@dolshin/ui';
import { useRef, useState, useEffect } from 'react';
import { ControlledStoryWrapper } from '../../../utils';

const SelectStory = (args: SelectFieldProps<string>) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      setContainer(ref.current);
    }
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '400px' }}>
      <ControlledStoryWrapper value={args.value}>
        {({ value, onChange }) => (
          <>
            <SelectField
              {...args}
              container={container}
              value={value}
              onValueChange={(e) => onChange(e ?? ' ')}
            />
            <div ref={ref} />
          </>
        )}
      </ControlledStoryWrapper>
    </div>
  );
};

const meta = {
  title: 'components/form/SelectField',
  component: SelectField,
  tags: ['autodocs'],
  args: {
    label: ' 件名',
    placeholder: '例： 件名を選択してください',
    modal: false,
    supportingText: '',
    required: false,
    disabled: false,
    error: false,
    errorText: '',
    touched: false,
    value: '',
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    modal: { control: 'boolean' },
    supportingText: { control: 'text' },
    errorText: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    touched: { control: 'boolean' },
    value: { control: 'text' },
  },
  render: (args) => <SelectStory {...args} />,
} satisfies Meta<SelectFieldProps<string>>;

export default meta;
type Story = StoryObj<SelectFieldProps<string>>;

/* ---------------------------------------------
 * Fixtures
 * -------------------------------------------- */
const Inquiries: SelectItem<string>[] = [
  { label: '予約', value: '予約について' },
  { label: '見学予約', value: '見学予約について' },
  { label: '設備について', value: '設備について' },
  { label: '空き状況について', value: '空き状況について' },
  { label: 'その他', value: 'その他' },
];

/* ---------------------------------------------
 * Stories
 * -------------------------------------------- */
export const Default: Story = {
  args: {
    items: Inquiries,
    modal: false,
    placeholder: '例： 件名を選択してください',
  },
};

export const Required: Story = {
  args: {
    items: Inquiries,
    required: true,
    placeholder: '例： 件名を選択してください',
  },
};

export const Error: Story = {
  args: {
    items: Inquiries,
    error: true,
    errorText: '件名は必須です。',
    placeholder: '例： 件名を選択してください',
  },
};

export const Disabled: Story = {
  args: {
    items: Inquiries,
    disabled: true,
  },
};
