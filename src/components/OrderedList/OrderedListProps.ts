import type { ClassAttributes, OlHTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import type { Property } from "csstype";

export interface BaseOrderedListProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  gutter?: {
    y?: Property.RowGap;
  };
}

type OrderedListProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLUListElement> &
    OlHTMLAttributes<HTMLOListElement> &
    BaseOrderedListProps<BaseComponentColorNameType>;

export type { OrderedListProps as default };
