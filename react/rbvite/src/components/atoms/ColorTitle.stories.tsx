import type { Meta, StoryObj } from "@storybook/react";
import ColorTitle from "./ColorTitle";

const meta: Meta = {
    title: 'Atomos/ColorTitle',
    component: ColorTitle,
    tags: ['autodocs']
}

type Story = StoryObj<typeof meta>;

export const GreenTitle: Story = {
    args: {
        color: 'green',
        size: 'md',
        textAlign: 'end',
        children: 'Green Title',
    },
};