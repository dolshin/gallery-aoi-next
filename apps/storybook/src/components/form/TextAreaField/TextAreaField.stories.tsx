import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextAreaField, type TextAreaFieldProps } from '@dolshin/ui';
import { ControlledStoryWrapper } from '../../../utils';

const meta = {
  title: 'components/form/TextAreaField',
  component: TextAreaField,
  tags: ['autodocs'],
  args: {
    label: 'お問い合わせ内容',
    placeholder: '例：お問い合わせ内容をこちらにご記入ください。',
    supportingText: '',
    required: false,
    disabled: false,
    error: false,
    errorText: '',
    touched: false,
    rows: 8,
    cols: 40,
    value: '',
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    supportingText: { control: 'text' },
    errorText: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    touched: { control: 'boolean' },
    rows: { control: 'number' },
    cols: { control: 'number' },
    value: { control: 'text' },
  },
  render: (args) => (
    <ControlledStoryWrapper value={args.value}>
      {({ value, onChange }) => (
        <TextAreaField
          {...args}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </ControlledStoryWrapper>
  ),
} satisfies Meta<TextAreaFieldProps>;

export default meta;
type Story = StoryObj<TextAreaFieldProps>;

export const Default: Story = {
  args: {},
};

export const Required: Story = {
  args: { required: true },
};

export const Error: Story = {
  args: {
    error: true,
    errorText: 'お問い合わせ内容は必須です。',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'こちらは入力できません。',
  },
};

export const SupportingText: Story = {
  args: {
    supportingText: 'お問い合わせ内容は400文字以内でご記入ください。',
  },
};
