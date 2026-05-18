import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import type { Property } from "csstype";

export interface BaseUnorderedListItemProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  gutter?: {
    y?: Property.RowGap;
  };
}

type UnorderedListItemProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLLIElement> &
    HTMLAttributes<HTMLLIElement> &
    BaseUnorderedListItemProps<BaseComponentColorNameType>;

export type { UnorderedListItemProps as default };
