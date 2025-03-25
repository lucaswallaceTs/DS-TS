import { Meta, StoryObj } from "@storybook/react";
import { H1Title } from "./H1Title";

const meta = {
  title: "H1Title",
  component: H1Title,
  tags: ["autodocs"],
} satisfies Meta<typeof H1Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    text: "Esta frase está usando o header h1",
  },
};
