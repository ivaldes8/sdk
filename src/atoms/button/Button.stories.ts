import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mode: "primary",
    children: "Primary"
  },
};

export const Secondary: Story = {
  args: {
    mode: "secondary",
    children: "Secondary"
  },
};

export const Tertiary: Story = {
  args: {
    mode: "tertiary",
    children: "Tertiary"
  },
};

export const Inverted: Story = {
  args: {
    mode: "inverted",
    children: "Inverted"
  },
};

export const Success: Story = {
  args: {
    mode: "success",
    children: "Success"
  },
};