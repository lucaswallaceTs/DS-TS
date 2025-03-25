import { Meta, StoryObj } from "@storybook/react";
import { CardMobile } from "./CardMobile";

const meta = {
  title: "CardMobile",
  component: CardMobile,
  tags: ["autodocs"],
} satisfies Meta<typeof CardMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    image: "https://cdn.ticketsports.com.br/ticketagora/images/thumb/IOQ77E6U2HCAWMN2S2ZC4TIRJY51ZCGHA57209W14H2Y1KPF00.png",
    titleEvent: "Rocky Mountain Sports Content",
    location: "Local do evento",
    dateEvent: "Data do evento",
    linkDoEvento: "https://www.google.com.br",
  },
  parameters: {
    backgrounds: {
      default: "dark", 
      values: [
        { name: "lightgray", value: "#f5f5f5" },
        { name: "dark", value: "#333" },
      ],
    },
  },
};

