import type { Meta, StoryObj } from "@storybook/react";
import  Icon  from "./icon";

const meta = {
  title: "Example/Icon",
  component: Icon,
  tags: ["docsPage"],
  argTypes: {
    name: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        name: "Alarm",
        description: "This is a icon"
    },
}