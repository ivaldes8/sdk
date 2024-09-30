import { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";
import { fn } from "@storybook/test";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: { onClick: fn() },
  argTypes: {
    onClick: {
      control: false,
    },
  },
} as Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    size: "medium",
    icon: "arrowDown"
  },
};