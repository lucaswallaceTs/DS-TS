import { Meta, StoryObj } from "@storybook/react";
import { withRHF } from "./StorybookFormProvider";

const meta = {
  title: "StorybookFormProvider",
  component: withRHF(true),
  tags: ["autodocs"],  
} satisfies Meta<typeof withRHF>;

export default meta;
type Story = StoryObj<typeof meta>;
