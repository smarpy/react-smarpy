import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseSpeechBubbleMessageProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type SpeechBubbleMessageProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseSpeechBubbleMessageProps<BaseComponentColorNameType>;
export type { SpeechBubbleMessageProps as default };
//# sourceMappingURL=SpeechBubbleMessageProps.d.ts.map