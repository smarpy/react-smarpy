"use client";

import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "../SpeechBubble/SpeechBubble.module.scss";
import type SpeechBubbleMessageInnerProps from "./SpeechBubbleMessageInnerProps";
import type { BaseSpeechBubbleMessageInnerProps } from "./SpeechBubbleMessageInnerProps";

export default function SpeechBubbleMessageInner<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends
    BaseSpeechBubbleMessageInnerProps<BaseComponentColorNameType> =
    SpeechBubbleMessageInnerProps<BaseComponentColorNameType>,
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

  const assignedClassNames: string[] = [classNames["speech-bubble-message-inner"]];

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
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
