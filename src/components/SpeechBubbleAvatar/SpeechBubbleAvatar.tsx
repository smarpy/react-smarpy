"use client";

import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "../SpeechBubble/SpeechBubble.module.scss";
import type SpeechBubbleAvatarProps from "./SpeechBubbleAvatarProps";
import type { BaseSpeechBubbleAvatarProps } from "./SpeechBubbleAvatarProps";

export default function SpeechBubbleAvatar<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseSpeechBubbleAvatarProps<BaseComponentColorNameType> =
    SpeechBubbleAvatarProps<BaseComponentColorNameType>,
>(props: ComponentPropsType): React.ReactElement {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  delete assignedProps["className"];
  delete assignedProps["css"];
  delete assignedProps["as"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["speech-bubble-avatar"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames({
    fore: props.fore,
    back: props.back,
    border: props.border,
    highlighter: props.highlighter,
    spacing: props.spacing,
    sizing: props.sizing,
    positioning: props.positioning,
  });
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }

  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const css = emotionCssUtility.getEmotionCss<BaseComponentColorNameType>({
    fore: props.fore,
    back: props.back,
    border: props.border,
    highlighter: props.highlighter,
    spacing: props.spacing,
    sizing: props.sizing,
    positioning: props.positioning,
    css: props.css,
  });

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <img
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
