import { ClassAttributes, ImgHTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseSpeechBubbleAvatarProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type SpeechBubbleAvatarProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement> & BaseSpeechBubbleAvatarProps<BaseComponentColorNameType>;
export type { SpeechBubbleAvatarProps as default };
//# sourceMappingURL=SpeechBubbleAvatarProps.d.ts.map