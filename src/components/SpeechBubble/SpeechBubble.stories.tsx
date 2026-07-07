import type { Meta, StoryObj } from "@storybook/react-vite";

import Smarpy from "../../base/Smarpy";
import SpeechBubbleAvatar from "../SpeechBubbleAvatar";
import SpeechBubbleAvatarContainer from "../SpeechBubbleAvatarContainer";
import SpeechBubbleContentContainer from "../SpeechBubbleContentContainer";
import SpeechBubbleMessage from "../SpeechBubbleMessage";
import SpeechBubbleMessageInner from "../SpeechBubbleMessageInner";
import SpeechBubbleName from "../SpeechBubbleName";
import SpeechBubble from "./SpeechBubble";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/SpeechBubble",
  component: SpeechBubble,
  tags: ["autodocs"],
  argTypes: {
    colorName: {
      control: "text"
    }
  },
} satisfies Meta<typeof SpeechBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Smarpy>
      <SpeechBubble {...props}>
        <SpeechBubbleAvatarContainer>
          <SpeechBubbleAvatar
            src="https://smarpy.github.io/smarpy/images/avatar/kaminorse/kaminorse.png"
            alt="avatar"
          />
        </SpeechBubbleAvatarContainer>
        <SpeechBubbleContentContainer>
          <SpeechBubbleName>{"Name"}</SpeechBubbleName>
          <SpeechBubbleMessage>
            <SpeechBubbleMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </SpeechBubbleMessageInner>
          </SpeechBubbleMessage>
        </SpeechBubbleContentContainer>
      </SpeechBubble>
    </Smarpy>
  ),
};

export const AvatarSizeLarge: Story = {
  args: {
    avatarSize: "large",
  },
  render: (props) => (
    <Smarpy>
      <SpeechBubble {...props}>
        <SpeechBubbleAvatarContainer>
          <SpeechBubbleAvatar
            src="https://smarpy.github.io/smarpy/images/avatar/kaminorse/kaminorse.png"
            alt="avatar"
          />
        </SpeechBubbleAvatarContainer>
        <SpeechBubbleContentContainer>
          <SpeechBubbleName>{"Name"}</SpeechBubbleName>
          <SpeechBubbleMessage>
            <SpeechBubbleMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </SpeechBubbleMessageInner>
          </SpeechBubbleMessage>
        </SpeechBubbleContentContainer>
      </SpeechBubble>
    </Smarpy>
  ),
};

export const AvatarSizeSmall: Story = {
  args: {
    avatarSize: "small",
  },
  render: (props) => (
    <Smarpy>
      <SpeechBubble {...props}>
        <SpeechBubbleAvatarContainer>
          <SpeechBubbleAvatar
            src="https://smarpy.github.io/smarpy/images/avatar/kaminorse/kaminorse.png"
            alt="avatar"
          />
        </SpeechBubbleAvatarContainer>
        <SpeechBubbleContentContainer>
          <SpeechBubbleName>{"Name"}</SpeechBubbleName>
          <SpeechBubbleMessage>
            <SpeechBubbleMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </SpeechBubbleMessageInner>
          </SpeechBubbleMessage>
        </SpeechBubbleContentContainer>
      </SpeechBubble>
    </Smarpy>
  ),
};

export const AvatarHasBorder: Story = {
  args: {
    avatarHasBorder: true,
  },
  render: (props) => (
    <Smarpy>
      <SpeechBubble {...props}>
        <SpeechBubbleAvatarContainer>
          <SpeechBubbleAvatar
            src="https://smarpy.github.io/smarpy/images/avatar/kaminorse/kaminorse.png"
            alt="avatar"
          />
        </SpeechBubbleAvatarContainer>
        <SpeechBubbleContentContainer>
          <SpeechBubbleName>{"Name"}</SpeechBubbleName>
          <SpeechBubbleMessage>
            <SpeechBubbleMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </SpeechBubbleMessageInner>
          </SpeechBubbleMessage>
        </SpeechBubbleContentContainer>
      </SpeechBubble>
    </Smarpy>
  ),
};

export const IsAvatarCircle: Story = {
  args: {
    isAvatarCircle: true,
  },
  render: (props) => (
    <Smarpy>
      <SpeechBubble {...props}>
        <SpeechBubbleAvatarContainer>
          <SpeechBubbleAvatar
            src="https://smarpy.github.io/smarpy/images/avatar/kaminorse/kaminorse.png"
            alt="avatar"
          />
        </SpeechBubbleAvatarContainer>
        <SpeechBubbleContentContainer>
          <SpeechBubbleName>{"Name"}</SpeechBubbleName>
          <SpeechBubbleMessage>
            <SpeechBubbleMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </SpeechBubbleMessageInner>
          </SpeechBubbleMessage>
        </SpeechBubbleContentContainer>
      </SpeechBubble>
    </Smarpy>
  ),
};

export const IsRight: Story = {
  args: {
    isRight: true,
  },
  render: (props) => (
    <Smarpy>
      <SpeechBubble {...props}>
        <SpeechBubbleContentContainer>
          <SpeechBubbleName>{"Name"}</SpeechBubbleName>
          <SpeechBubbleMessage>
            <SpeechBubbleMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </SpeechBubbleMessageInner>
          </SpeechBubbleMessage>
        </SpeechBubbleContentContainer>
        <SpeechBubbleAvatarContainer>
          <SpeechBubbleAvatar
            src="https://smarpy.github.io/smarpy/images/avatar/kaminorse/kaminorse.png"
            alt="avatar"
          />
        </SpeechBubbleAvatarContainer>
      </SpeechBubble>
    </Smarpy>
  ),
};

