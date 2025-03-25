import { Meta, StoryObj } from "@storybook/react";
import { ModalBox } from "./ModalBox";
import React from "react";
import { Button } from "../Button/Button";

const meta = {
  title: "ModalBox",
  component: ModalBox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "3em", backgroundColor: "#000" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ModalBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {
  args: {
    title: "Deseja enviar a cobrança para os atletas selecionados?",
    textInfo:
      "Escolha abaixo a forma de enviar o link da cobranças para o atleta:",
    children: (
      <>
      </>
    ),
    closeModal: () => alert('Modal fechado'),
  },
};




