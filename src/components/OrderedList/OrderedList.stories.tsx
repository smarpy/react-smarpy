import type { Meta, StoryObj } from "@storybook/react-vite";

import OrderedList from "./OrderedList";
import Smarpy from "../../base/Smarpy";
import { OrderedListItem } from "../OrderedListItem";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/OrderedList",
  component: OrderedList,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof OrderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <Smarpy>
      <OrderedList {...props}>
        <OrderedListItem>
          {"Item 1"}
        </OrderedListItem>
        <OrderedListItem>
          {"Item 2"}
        </OrderedListItem>
        <OrderedListItem>
          {"Item 3"}
          <OrderedList {...props}>
            <OrderedListItem>
              {"Item 3-1"}
            </OrderedListItem>
            <OrderedListItem>
              {"Item 3-2"}
            </OrderedListItem>
            <OrderedListItem>
              {"Item 3-3"}
            </OrderedListItem>
          </OrderedList>
        </OrderedListItem>
      </OrderedList>
    </Smarpy>
  ),
};
