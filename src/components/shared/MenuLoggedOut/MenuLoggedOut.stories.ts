import { Meta, StoryObj } from "@storybook/react";
import { MenuLoggedOut } from "./MenuLoggedOut";

const meta = {
  title: "MenuLoggedOut",
  component: MenuLoggedOut,
  tags: ["autodocs"],
} satisfies Meta<typeof MenuLoggedOut>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuDeslogado: Story = {
  args: {
    isLoggedIn: false,
    imagePerfil: "",
    nomePerfil: "Lucas Wallace",
    pageLogin: "https://www.ticketsports.com.br/Entrar/Participante",
    linkAtendimento: "",
    linkCalendario: "",
    filterModality: ()=>({}),
    idioma: ()=>({}),
    openMenuModal: ()=>({}),
    sigla: "PT"
  },
};

export const MenuLogado: Story = {
  args: {
    isLoggedIn: true,
    imagePerfil: "",
    nomePerfil: "Lucas Wallace",
    pageLogin: "https://www.ticketsports.com.br/Entrar/Participante",
    linkAtendimento: "",
    linkCalendario: "",
    filterModality: ()=>({}),
    idioma: ()=>({}),
    openMenuModal: ()=>({}),
    sigla: "PT"
  },
};
