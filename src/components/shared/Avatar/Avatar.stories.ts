import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageGrande: Story = {
  args: {
    linkImage: "https://criticalhits.com.br/wp-content/uploads/2021/08/mestre-kame.jpg",
    width: 56,
    height: 56,
    alt: "Icone de perfil",
  },
};
export const ImageMedio: Story = {
  args: {
    linkImage: "https://criticalhits.com.br/wp-content/uploads/2021/08/mestre-kame.jpg",
    width: 48,
    height: 48,
    alt: "Icone de perfil",
  },
};
export const ImagePequeno: Story = {
  args: {
    linkImage: "https://criticalhits.com.br/wp-content/uploads/2021/08/mestre-kame.jpg",
    width: 40,
    height: 40,
    alt: "Icone de perfil",
  },
};
export const ImageMuitoPequeno: Story = {
  args: {
    linkImage: "https://criticalhits.com.br/wp-content/uploads/2021/08/mestre-kame.jpg",
    width: 32,
    height: 32,
    alt: "Icone de perfil",
  },
};
