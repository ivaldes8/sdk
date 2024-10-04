import { Meta, StoryObj } from "@storybook/react";
import { fn } from '@storybook/test';

import { IconButton } from "./IconButton";

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ["large", "medium", "small"],
    },
    mode: {
      control: { type: 'select' },
      options: ["dark", "light", "success"],
    },
  },
  args: { onClick: fn() },
} as Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Linked: Story = {
  args: {
    mode: "light",
    icon: "check",
    href: "https://mozrest.com/es-es/",
    size: "medium",
  },
};

export const Dark: Story = {
  args: {
    mode: "dark",
    icon: "check",
  },
}

export const Light: Story = {
  args: {
    mode: "light",
    icon: "check",
  },
}

// const ButtonTemplate: Story<IconButtonProps> = (args) => <IconButton {...args} icon="linkedin" />;

// export const DarkButton = ButtonTemplate.bind({});
// DarkButton.args = {
//   mode: "dark",
//   size: "medium",
//   label: "Linkedin",
// };
// export const LightButton = ButtonTemplate.bind({});
// LightButton.args = {
//   mode: "light",
//   size: "medium",
//   label: "Linkedin",
// };

// export const AsLink: Story<IconButtonProps> = () => (
//   <IconButton href="https://mozrest.com/es-es/" target="_blank" mode="dark" label="Síguenos en Twitch" icon="linkedin" />
// );
