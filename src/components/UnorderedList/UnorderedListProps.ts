import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import type { Property } from "csstype";

export interface BaseUnorderedListProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  gutter?: {
    y?: Property.RowGap;
  };
}

type UnorderedListProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLUListElement> &
    HTMLAttributes<HTMLUListElement> &
    BaseUnorderedListProps<BaseComponentColorNameType>;

export type { UnorderedListProps as default };
