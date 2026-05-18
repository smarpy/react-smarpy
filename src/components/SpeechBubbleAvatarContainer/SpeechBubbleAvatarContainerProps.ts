import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseSpeechBubbleAvatarContainerProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {}

type SpeechBubbleAvatarContainerProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseSpeechBubbleAvatarContainerProps<BaseComponentColorNameType>;

export type { SpeechBubbleAvatarContainerProps as default };
