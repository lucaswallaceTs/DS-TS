import { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

const meta = {
  title: "SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {
    register: ()=>{"Pesquisa"},
    optionSearch: [{ text: "option one" }, { text: "option two" }],
  },
};
