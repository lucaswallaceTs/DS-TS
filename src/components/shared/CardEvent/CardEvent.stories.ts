import { Meta, StoryObj } from "@storybook/react";
import { CardEvent } from "./CardEvent";

const meta = {
  title: "CardEvent",
  component: CardEvent,
  tags: ["autodocs"],
} satisfies Meta<typeof CardEvent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    imageEvent: "https://cdn.ticketsports.com.br/ticketagora/images/thumb/IOQ77E6U2HCAWMN2S2ZC4TIRJY51ZCGHA57209W14H2Y1KPF00.png",
    children: "Aberto",
    titleEvent: "Titulo do evento",
    location: "Local do evento",
    dateEvent: "Data do evento",
    colorStatus: "positivo",
    status: "Aberto",
    registrations: "15/12/2025",
    linkDoEvento: "https://www.google.com.br",
  },
};

export const CardFechado: Story = {
  args: {
    imageEvent: "https://cdn.ticketsports.com.br/ticketagora/images/thumb/IOQ77E6U2HCAWMN2S2ZC4TIRJY51ZCGHA57209W14H2Y1KPF00.png",
    children: "Aberto",
    titleEvent: "Titulo do evento",
    location: "Local do evento",
    dateEvent: "Data do evento",
    colorStatus: "negativo",
    status: "Aberto",
    registrations: "15/12/2025",
    linkDoEvento: "https://www.google.com.br",
  },
};
