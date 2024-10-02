import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

const meta = {
  title: 'Atoms/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ["primary", "secondary", "warning", "danger", "success", "info"],
      description: 'Defines the alert type.',
      table: {
        type: { summary: 'primary | secondary | warning | danger | success | info' },
        defaultValue: { summary: 'primary' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
    children: {
      control: 'text',
      description: 'Content of the alert.',
    },
  },
} as Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
};

export const Success: Story = {
  args: {
    type: "success",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
};

export const Info: Story = {
  args: {
    type: "info",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
};