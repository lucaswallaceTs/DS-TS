import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Notification } from "./Notification";
import { Button } from "../Button";

const meta = {
  title: "Notification",
  component: Notification,
  tags: ["autodocs"],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

const notificationStory = (type: string) => ({
  args: {
    type,
    title:`${type}`,
    info: `${type}`,
  },
});

// Exportando as variações do botão "dark"
export const Error = notificationStory("erro");
export const Orientation = notificationStory("orientation");
export const Alert = notificationStory("alert");
export const Validation = notificationStory("validation");
