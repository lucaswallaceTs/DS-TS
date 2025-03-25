import { Meta, StoryObj } from "@storybook/react";
import { H4Title } from "./H4Title";

const meta = {
  title: "H4Title",
  component: H4Title,
  tags: ["autodocs"],
} satisfies Meta<typeof H4Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H4: Story = {
  args: {
    text: "Esta frase está usando o header h4",
  },
};
