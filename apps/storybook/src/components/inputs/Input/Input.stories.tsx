import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@dolshin/ui';

const meta = {
  title: 'components/inputs/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'text',
    placeholder: '例: 入力してください',
    disabled: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello!',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    value: 'password123',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled Input',
  },
};
