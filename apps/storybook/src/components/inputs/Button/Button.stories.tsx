import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, type ButtonProps } from '@dolshin/ui';
import { ChevronRight } from '@dolshin/icons/ui';

const meta = {
  title: 'components/inputs/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'primary',
    size: 'md',
    loading: false,
    children: 'ボタン',
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
    children: { control: 'text' },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

//
// ▼ 基本
//
export const Default: Story = {};

export const Loading: Story = {
  args: {
    children: '保存する',
    loading: true,
    variant: 'primary',
  },
};

export const AllLoading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Button loading loadingPosition="left" leftIcon={<ChevronRight />}>
        保存する
      </Button>
      <Button loading loadingPosition="center">
        保存する
      </Button>
      <Button loading loadingPosition="right" rightIcon={<ChevronRight />}>
        保存する
      </Button>
    </div>
  ),
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
