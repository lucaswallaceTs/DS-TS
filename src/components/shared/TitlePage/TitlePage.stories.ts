import { Meta, StoryObj } from "@storybook/react";
import { TitlePage } from "./TitlePage";

const meta = {
  title: "TitlePage",
  component: TitlePage,
  tags: ["autodocs"],
} satisfies Meta<typeof TitlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    title: "Esta frase está usando o header h1",
    subtitle: "Esta frase está usando o header h1",
  },
};
