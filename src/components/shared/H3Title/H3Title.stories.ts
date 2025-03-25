import { Meta, StoryObj } from "@storybook/react";
import { H3Title } from "./H3Title";

const meta = {
  title: "H3Title",
  component: H3Title,
  tags: ["autodocs"],
} satisfies Meta<typeof H3Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H3: Story = {
  args: {
    text: "Esta frase está usando o header h3",
  },
};
