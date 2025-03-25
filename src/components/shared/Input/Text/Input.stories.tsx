import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import { withRHF } from "../../../StorybookFormProvider";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  decorators: [withRHF(false)],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errors: { nome: null },
    register: "nome",
    name: "nome",
    type: "text",
    label: "Nome completo",
  },
};

export const Disabled: Story = {
  args: {
    errors: {
      nome: {
        message: "Campo obrigatório",
        type: "required",
      },
    },
    register: "nome",
    name: "nome",
    type: "text",
    disabled: true,
    label: "Nome completo",
  },
};

export const WithErrors: Story = {
  args: {
    errors: {
      nome: {
        message: "Campo obrigatório",
        type: "required",
      },
    },
    register: "nome",
    name: "nome",
    type: "text",
    label: "Nome completo",
  },
};
