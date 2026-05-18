import { ClassAttributes, OlHTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { Property } from 'csstype';
export interface BaseOrderedListProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    gutter?: {
        y?: Property.RowGap;
    };
}
type OrderedListProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLUListElement> & OlHTMLAttributes<HTMLOListElement> & BaseOrderedListProps<BaseComponentColorNameType>;
export type { OrderedListProps as default };
//# sourceMappingURL=OrderedListProps.d.ts.map