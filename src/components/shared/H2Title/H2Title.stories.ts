import { Meta, StoryObj } from "@storybook/react";
import { H2Title } from "./H2Title";

const meta = {
  title: "H2Title",
  component: H2Title,
  tags: ["autodocs"],
} satisfies Meta<typeof H2Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H2: Story = {
  args: {
    text: "Esta frase está usando o header h2",
  },
};
