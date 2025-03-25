import { Meta, StoryObj } from "@storybook/react";
import { MenuStandard } from "./MenuStandard";

const meta = {
  title: "MenuStandard",
  component: MenuStandard,
  tags: ["autodocs"],
} satisfies Meta<typeof MenuStandard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuPadrao: Story = {
  args: {
    prevPage: "https://www.ticketsports.com.br",
  },
};

