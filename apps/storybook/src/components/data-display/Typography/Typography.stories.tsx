import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '@dolshin/ui';

const meta = {
  title: 'components/data-display/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'heading-2xl',
        'heading-xl',
        'heading-md',
        'heading-sm',
        'body-md',
        'body-sm',
        'inline-md',
        'inline-sm',
      ],
    },
    tone: {
      control: 'select',
      options: ['default', 'muted', 'subtle'],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

//
// ▼ 基本
//
export const Heading2xl: Story = {
  args: {
    children: 'タイトル',
    variant: 'heading-2xl',
    tone: 'default',
  },
};

export const HeadingXl: Story = {
  args: {
    children: 'タイトル',
    variant: 'heading-xl',
    tone: 'default',
  },
};

export const HeadingMd: Story = {
  args: {
    children: 'タイトル',
    variant: 'heading-md',
    tone: 'default',
  },
};

export const HeadingSm: Story = {
  args: {
    children: 'タイトル',
    variant: 'heading-sm',
    tone: 'default',
  },
};

export const BodyMd: Story = {
  args: {
    children: 'ボディ',
    variant: 'body-md',
    tone: 'default',
  },
};

export const BodySm: Story = {
  args: {
    children: 'ボディ',
    variant: 'body-sm',
    tone: 'default',
  },
};

export const InlineMd: Story = {
  args: {
    children: 'インライン',
    variant: 'inline-md',
    tone: 'default',
  },
};

export const InlineSm: Story = {
  args: {
    children: 'インライン',
    variant: 'inline-sm',
    tone: 'default',
  },
};
