import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
    title: "Example/Button",
    component: Button,
    tags: ["docsPage"],
    argTypes: {
        label: {
            control: { type: "text" },
        },
        description: {
            control: { type: "text" },
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "Button",
        description: "This is a button",
        className: "bg-red-800"
    },
}