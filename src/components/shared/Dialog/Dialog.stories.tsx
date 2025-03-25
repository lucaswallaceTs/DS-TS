import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { Button } from "../Button";

const meta = {
  title: "Dialog",
  component: Dialog,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "3em", backgroundColor: "#DDD" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const dark: Story = {
  args: {
    children: (
      <Button
        size="medium"
        variation="ghost"
        title="Botão dentro do dialog"
      />
    ),
  },
};
