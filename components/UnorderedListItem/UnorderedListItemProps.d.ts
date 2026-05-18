import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { Property } from 'csstype';
export interface BaseUnorderedListItemProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    gutter?: {
        y?: Property.RowGap;
    };
}
type UnorderedListItemProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLLIElement> & HTMLAttributes<HTMLLIElement> & BaseUnorderedListItemProps<BaseComponentColorNameType>;
export type { UnorderedListItemProps as default };
//# sourceMappingURL=UnorderedListItemProps.d.ts.map