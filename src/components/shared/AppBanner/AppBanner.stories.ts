import { Meta, StoryObj } from "@storybook/react";
import { AppBanner } from "./AppBanner";

const meta = {
  title: "AppBanner",
  component: AppBanner,
  tags: ["autodocs"],
} satisfies Meta<typeof AppBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const App: Story = {};