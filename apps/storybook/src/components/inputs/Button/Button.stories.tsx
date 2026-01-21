import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, type ButtonProps } from '@dolshin/ui';

const meta = {
  title: 'components/inputs/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary'],
    },
    size: {
      control: 'select',
      options: ['md'],
    },
    loading: {
      control: 'boolean',
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

//
// ▼ 基本
//
export const Default: Story = {
  args: {
    children: 'ボタン',
    variant: 'primary',
    size: 'md',
  },
};

//
// ▼ バリアント一覧
//
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem' }}>
      <Button variant="primary">ボタン</Button>
    </div>
  ),
};

//
// ▼ サイズ一覧
//
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'end' }}>
      <Button size="md">ボタン</Button>
    </div>
  ),
};

//
// ▼ loading
//
export const Loading: Story = {
  args: {
    children: '送信中...',
    loading: true,
    variant: 'primary',
  },
};

//
// ▼ disabled
//
export const Disabled: Story = {
  args: {
    children: '無効',
    disabled: true,
    variant: 'primary',
  },
};

//
// ▼ fullWidth
//
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '800px', border: '1px solid #eee', padding: '16px' }}>
      <Button fullWidth>幅いっぱい</Button>
    </div>
  ),
};
