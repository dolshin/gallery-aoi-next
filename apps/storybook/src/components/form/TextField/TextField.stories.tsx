import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField, type TextFieldProps } from '@dolshin/ui';
import { ControlledStoryWrapper } from '../../../utils';

const meta = {
  title: 'components/form/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    type: 'text',
    label: '氏名',
    placeholder: '山田 太郎',
    supportingText: '',
    required: false,
    disabled: false,
    error: false,
    errorText: '',
    touched: false,
    value: '',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    supportingText: { control: 'text' },
    errorText: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    touched: { control: 'boolean' },
    value: { control: 'text' },
  },
  render: (args) => (
    <ControlledStoryWrapper value={args.value}>
      {({ value, onChange }) => (
        <div style={{ maxWidth: '600px' }}>
          <TextField
            {...args}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      )}
    </ControlledStoryWrapper>
  ),
} satisfies Meta<TextFieldProps>;

export default meta;
type Story = StoryObj<TextFieldProps>;

export const Default: Story = {
  args: {},
};

export const Required: Story = {
  args: { required: true },
};

export const Error: Story = {
  args: {
    error: true,
    errorText: '氏名は必須です。',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const PasswordField: Story = {
  args: {
    label: 'パスワード',
    type: 'password',
    value: 'password123456',
  },
};

export const SupportingText: Story = {
  args: { supportingText: '氏名をフルネームでご入力ください。' },
};
