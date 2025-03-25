import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BoxStatus } from "./BoxStatus";

const meta = {
  title: "Status",
  component: BoxStatus,
  tags: ["autodocs"],
} satisfies Meta<typeof BoxStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Status: Story = {
  args: {
    text: "Aviso positivo",
    className: "positivo", 
  },
};
export const StatusNegativo: Story = {
  args: {
    text: "Aviso negativo",
    className: "negativo", 
  },
};
export const StatusAlerta: Story = {
  args: {
    text: "Aviso de alerta",
    className: "alerta", 
  },
};
