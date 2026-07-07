"use client";

import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "../SpeechBubble/SpeechBubble.module.scss";
import type SpeechBubbleContentContainerProps from "./SpeechBubbleContentContainerProps";
import type { BaseSpeechBubbleContentContainerProps } from "./SpeechBubbleContentContainerProps";

export default function SpeechBubbleContentContainer<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends
    BaseSpeechBubbleContentContainerProps<BaseComponentColorNameType> =
    SpeechBubbleContentContainerProps<BaseComponentColorNameType>,
>(props: ComponentPropsType): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["as"];
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

  const assignedClassNames: string[] = [classNames["speech-bubble-content-container"]];

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
