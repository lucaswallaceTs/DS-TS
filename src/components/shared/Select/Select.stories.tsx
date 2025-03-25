import { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";
import { withRHF } from "../../StorybookFormProvider";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  decorators: [withRHF(true)],
 
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Nome",
    arrayValues: [{ text: "option one" }, { text: "option two" }],
    name: "nome",
    register: ()=>{"name"},
  },
};
