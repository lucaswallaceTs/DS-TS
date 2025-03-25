import { Meta, StoryObj } from "@storybook/react";
import { FooterMain } from "./FooterMain";

const meta = {
  title: "FooterMain",
  component: FooterMain,
  tags: ["autodocs"],
} satisfies Meta<typeof FooterMain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const footer: Story = {
  
};
