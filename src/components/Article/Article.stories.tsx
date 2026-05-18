import type { Meta, StoryObj } from "@storybook/react-vite";

import Article from "./Article";
import Smarpy from "../../base/Smarpy";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Article",
  component: Article,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Smarpy>
      <Article {...props}>{"Plain"}</Article>
    </Smarpy>
  ),
};
