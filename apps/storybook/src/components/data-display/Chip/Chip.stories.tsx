import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Chip, type ChipProps } from '@dolshin/ui';

const meta = {
  title: 'components/data-display/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'チップ',
    variant: 'default',
    size: 'md',
    clickable: false,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'radio',
      options: ['default', 'primary'],
    },
    size: {
      control: 'radio',
      options: ['md'],
    },
    clickable: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
      if: { arg: 'clickable', truthy: true },
    },
  },
} satisfies Meta<ChipProps>;

export default meta;

type Story = StoryObj<ChipProps>;

export const Default: Story = {};

export const Clickable: Story = {
  args: {
    clickable: true,
    onClick: action('chip-click'),
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const ClickablePrimary: Story = {
  args: {
    variant: 'primary',
    clickable: true,
    onClick: action('chip-click'),
  },
};
