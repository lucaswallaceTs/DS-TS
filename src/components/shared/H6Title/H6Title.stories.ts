import { Meta, StoryObj } from "@storybook/react";
import { H6Title } from "./H6Title";

const meta = {
  title: "H6Title",
  component: H6Title,
  tags: ["autodocs"],
} satisfies Meta<typeof H6Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H6: Story = {
  args: {
    text: "Esta frase está usando o header h6",
  },
};
