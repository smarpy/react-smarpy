import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { BorderStyle, BorderWidth, ColorName } from '../../types';
export interface BaseSpeechBubbleProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
    avatarSize?: "large" | "small";
    borderStyle?: BorderStyle;
    borderWidth?: BorderWidth;
    avatarHasBorder?: boolean;
    isAvatarCircle?: boolean;
    isRight?: boolean;
}
type SpeechBubbleProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseSpeechBubbleProps<BaseComponentColorNameType>;
export type { SpeechBubbleProps as default };
//# sourceMappingURL=SpeechBubbleProps.d.ts.map