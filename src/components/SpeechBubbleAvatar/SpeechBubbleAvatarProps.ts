import type { ClassAttributes, ImgHTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseSpeechBubbleAvatarProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {}

type SpeechBubbleAvatarProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLImageElement> &
    ImgHTMLAttributes<HTMLImageElement> &
    BaseSpeechBubbleAvatarProps<BaseComponentColorNameType>;

export type { SpeechBubbleAvatarProps as default };
