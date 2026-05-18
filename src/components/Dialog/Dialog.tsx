"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Dialog.module.scss";
import type { BaseDialogProps } from "./DialogProps";
import type DialogProps from "./DialogProps";

/**
 * @deprecated Move to SpeechBubble
 */
export default function Dialog<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseDialogProps<BaseComponentColorNameType> =
    DialogProps<BaseComponentColorNameType>,
>(props: ComponentPropsType): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["avatarSize"];
  delete assignedProps["borderStyle"];
  delete assignedProps["borderWidth"];
  delete assignedProps["isRight"];
  delete assignedProps["isAvatarCircle"];
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

  const assignedClassNames = [classNames["speech-bubble"]];
  if (props.isRight) {
    assignedClassNames.push(classNames[`is-right`]);
  } else {
    assignedClassNames.push(classNames[`is-left`]);
  }
  if (props.avatarSize) {
    assignedClassNames.push(classNames[`is-avatar-${props.avatarSize}`]);
  }
  if (props.borderStyle) {
    assignedClassNames.push(classNames[`is-border-style-${props.borderStyle}`]);
  }
  if (props.borderWidth) {
    assignedClassNames.push(classNames[`is-border-width-${props.borderWidth}`]);
  }
  props.isAvatarCircle &&
    assignedClassNames.push(classNames[`is-avatar-circle`]);

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

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--smarpy-speech-bubble-color-fore"]: `var(--smarpy-color-${props.colorName}-speech-bubble-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-speech-bubble-color-back"]: `var(--smarpy-color-${props.colorName}-speech-bubble-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-speech-bubble-color-border"]: `var(--smarpy-color-${props.colorName}-speech-bubble-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-speech-bubble-selection-color-fore"]: `var(--smarpy-color-${props.colorName}-speech-bubble-selection-fore, var(--smarpy-color-${props.colorName}-selection-fore))`,
        ["--smarpy-speech-bubble-selection-color-back"]: `var(--smarpy-color-${props.colorName}-speech-bubble-selection-back, var(--smarpy-color-${props.colorName}-selection-back))`,
        ["--smarpy-speech-bubble-avatar-color-back"]: `var(--smarpy-color-${props.colorName}-speech-bubble-back)`,
        ["--smarpy-speech-bubble-avatar-color-border"]: `var(--smarpy-color-${props.colorName}-speech-bubble-border)`,
        ["--smarpy-speech-bubble-name-color-fore"]: `var(--smarpy-color-${props.colorName}-speech-bubble-name-fore)`,
        ["--smarpy-speech-bubble-name-color-back"]: `var(--smarpy-color-${props.colorName}-speech-bubble-name-back)`,
        ["--smarpy-speech-bubble-name-color-border"]: `var(--smarpy-color-${props.colorName}-speech-bubble-name-border)`,
        ["--smarpy-speech-bubble-message-color-fore"]: `var(--smarpy-color-${props.colorName}-speech-bubble-message-fore)`,
        ["--smarpy-speech-bubble-message-color-back"]: `var(--smarpy-color-${props.colorName}-speech-bubble-message-back)`,
        ["--smarpy-speech-bubble-message-color-border"]: `var(--smarpy-color-${props.colorName}-speech-bubble-message-border)`,
      }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
  };

  const css = emotionCssUtility.getEmotionCss<BaseComponentColorNameType>(
    {
      fore: props.fore,
      back: props.back,
      border: props.border,
      highlighter: props.highlighter,
      spacing: props.spacing,
      sizing: props.sizing,
      positioning: props.positioning,
      css: props.css,
    },
    optionalCss,
  );

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
