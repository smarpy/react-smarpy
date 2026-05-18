import { StoryObj } from '@storybook/react-vite';
import { default as SpeechBubble } from './SpeechBubble';
declare const meta: {
    title: string;
    component: typeof SpeechBubble;
    tags: string[];
    argTypes: {
        colorName: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Plain: Story;
export declare const AvatarSizeLarge: Story;
export declare const AvatarSizeSmall: Story;
export declare const AvatarHasBorder: Story;
export declare const IsAvatarCircle: Story;
export declare const IsRight: Story;
//# sourceMappingURL=SpeechBubble.stories.d.ts.map