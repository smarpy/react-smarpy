import type { Meta, StoryObj } from "@storybook/react-vite";

import UnorderedList from "./UnorderedList";
import Smarpy from "../../base/Smarpy";
import { UnorderedListItem } from "../UnorderedListItem";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/UnorderedList",
  component: UnorderedList,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof UnorderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <Smarpy>
      <UnorderedList {...props}>
        <UnorderedListItem>
          {"Item 1"}
        </UnorderedListItem>
        <UnorderedListItem>
          {"Item 2"}
        </UnorderedListItem>
        <UnorderedListItem>
          {"Item 3"}
          <UnorderedList {...props}>
            <UnorderedListItem>
              {"Item 3-1"}
            </UnorderedListItem>
            <UnorderedListItem>
              {"Item 3-2"}
            </UnorderedListItem>
            <UnorderedListItem>
              {"Item 3-3"}
            </UnorderedListItem>
          </UnorderedList>
        </UnorderedListItem>
      </UnorderedList>
    </Smarpy>
  ),
};
