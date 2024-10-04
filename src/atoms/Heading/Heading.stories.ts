import { Meta, StoryObj } from '@storybook/react';
import { Heading} from './Heading'

const meta = {
  title: "Atoms/Heading",
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} as Meta<typeof Heading>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    children: "Small"
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium"
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large"
  },
};