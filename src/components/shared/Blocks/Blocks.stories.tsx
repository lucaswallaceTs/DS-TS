import { Meta, StoryObj } from "@storybook/react";
import { Blocks } from "./Blocks";
import React from "react";
import { Button } from "../Button/Button";

const meta = {
  title: "Blocks",
  component: Blocks,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "3em", backgroundColor: "#000" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Blocks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Approved: Story = {
  args: {
    title: "Deseja enviar a cobrança para os atletas selecionados?",
    icon: "approved",
    textInfo:
      "Escolha abaixo a forma de enviar o link da cobranças para o atleta:",
    children: (
      <>
        <Button title="e-mail" size="medium" variation="primary" />
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    title: "Ocorreu um erro",
    icon: "error",
    textInfo:
      "Erro ao concetar com o banco de dados! Volte para a tela de login e tente novamente.",
    children: (
      <>
        <Button
          title="Retornar a tela de login"
          size="medium"
          variation="dark"
        />
      </>
    ),
  },
};

export const Alert: Story = {
  args: {
    title: "Cuidado com senhas fracas!",
    icon: "alert",
    textInfo: "Cadastre uma senha com caracteres, maiúsculas e minúsculas.",
    children: (
      <>
        <Button
          title="Retornar a tela de login"
          size="medium"
          variation="dark"
        />
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    title: "Chegaram as novas camisetas!",
    icon: "warning",
    textInfo: "Retire seu kit no ponto de retirada cadastrado em seu perfil.",
    children: (
      <>
        <Button
          title="Retornar a tela de login"
          size="medium"
          variation="dark"
        />
      </>
    ),
  },
};

export const NoIcon: Story = {
  args: {
    title: "Chegaram as novas camisetas!",
    textInfo: "Retire seu kit no ponto de retirada cadastrado em seu perfil.",
    children: (
      <>
        <Button
          title="Retornar a tela de login"
          size="medium"
          variation="dark"
        />
      </>
    ),
  },
};
