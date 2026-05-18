import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { Property } from 'csstype';
export interface BaseOrderedListItemProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    gutter?: {
        y?: Property.RowGap;
    };
}
type OrderedListItemProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLLIElement> & HTMLAttributes<HTMLLIElement> & BaseOrderedListItemProps<BaseComponentColorNameType>;
export type { OrderedListItemProps as default };
//# sourceMappingURL=OrderedListItemProps.d.ts.map