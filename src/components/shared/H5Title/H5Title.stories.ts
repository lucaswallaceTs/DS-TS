import { Meta, StoryObj } from "@storybook/react";
import { H5Title } from "./H5Title";

const meta = {
  title: "H5Title",
  component: H5Title,
  tags: ["autodocs"],
} satisfies Meta<typeof H5Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H5: Story = {
  args: {
    text: "Esta frase está usando o header h5",
  },
};
