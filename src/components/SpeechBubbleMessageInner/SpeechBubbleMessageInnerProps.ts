import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseSpeechBubbleMessageInnerProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {}

type SpeechBubbleMessageInnerProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseSpeechBubbleMessageInnerProps<BaseComponentColorNameType>;

export type { SpeechBubbleMessageInnerProps as default };
