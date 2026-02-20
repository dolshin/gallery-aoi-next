import { Pagination, type PaginationProps } from '@dolshin/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta = {
  title: 'components/navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    totalPages: 20,
    siblingCount: 1,
    boundaryCount: 1,
    disabled: false,
  },
  argTypes: {
    currentPage: { control: false },
    onPageChange: { control: false },

    totalPages: {
      control: { type: 'number', min: 1 },
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 3 },
    },
    boundaryCount: {
      control: { type: 'number', min: 0, max: 3 },
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<PaginationProps>;

export default meta;

type Story = StoryObj<PaginationProps>;

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);

    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
};

export const MiddlePage: Story = {
  args: {
    totalPages: 50,
    siblingCount: 1,
    boundaryCount: 1,
  },
  render: (args) => {
    const [page, setPage] = useState(25);

    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
};

export const WideRange: Story = {
  args: {
    totalPages: 50,
    siblingCount: 2,
    boundaryCount: 2,
  },
  render: (args) => {
    const [page, setPage] = useState(25);

    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    const [page] = useState(5);

    return <Pagination {...args} currentPage={page} onPageChange={() => {}} />;
  },
};

export const SmallTotal: Story = {
  args: {
    totalPages: 3,
  },
  render: (args) => {
    const [page, setPage] = useState(1);

    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
};
