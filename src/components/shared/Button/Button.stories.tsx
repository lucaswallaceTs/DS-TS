import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variation: {
      description: 'Define o estilo visual do botão. As opções incluem: primary, secondary, ghost, ou dark.',
    },
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const tag: Story = {
  args: {
    title: "Botão tag",
    variation: "tag",
    size: "tag",
  },
};

const createPrimaryStory = (size: any): Story => ({
  args: {
    title: `Botão ghost ${size}`,
    size,
    variation: "primary",
    onClick: () => {
      alert('Botão clicado!');
    },
  },
});
export const PrimaryExtraLarge = createPrimaryStory("extralarge");
export const PrimaryLarge = createPrimaryStory("large");
export const PrimaryMedium = createPrimaryStory("medium");
export const PrimarySmall = createPrimaryStory("small");

const createDarkStory = (size: any): Story => ({
  args: {
    title: `Botão ghost ${size}`,
    size,
    variation: "dark",
    onClick: () => {
      alert('Botão clicado!');
    },
  },
});
export const DarkExtraLarge = createDarkStory("extralarge");
export const DarkLarge = createDarkStory("large");
export const DarkMedium = createDarkStory("medium");
export const DarkSmall = createDarkStory("small");

const createGhostStory = (size: any): Story => ({
  args: {
    title: `Botão ghost ${size}`,
    size,
    variation: "ghost",
    onClick: () => {
      alert('Botão clicado!');
    },
  },
});
export const GhostExtraLarge = createGhostStory("extralarge");
export const GhostLarge = createGhostStory("large");
export const GhostMedium = createGhostStory("medium");
export const GhostSmall = createGhostStory("small");


const createDisabledStory = (size: any): Story => ({
  args: {
    title: `Botão Disabled ${size}`,
    size,
    variation: "disabled",
  },
});
export const DisabledExtraLarge = createDisabledStory("extralarge");
export const DisabledLarge = createDisabledStory("large");
export const DisabledMedium = createDisabledStory("medium");
export const DisabledSmall = createDisabledStory("small");

