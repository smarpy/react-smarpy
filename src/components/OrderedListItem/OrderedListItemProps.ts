import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import type { Property } from "csstype";

export interface BaseOrderedListItemProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  gutter?: {
    y?: Property.RowGap;
  };
}

type OrderedListItemProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLLIElement> &
    HTMLAttributes<HTMLLIElement> &
    BaseOrderedListItemProps<BaseComponentColorNameType>;

export type { OrderedListItemProps as default };
