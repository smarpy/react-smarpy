import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { Property } from 'csstype';
export interface BaseUnorderedListProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    gutter?: {
        y?: Property.RowGap;
    };
}
type UnorderedListProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLUListElement> & HTMLAttributes<HTMLUListElement> & BaseUnorderedListProps<BaseComponentColorNameType>;
export type { UnorderedListProps as default };
//# sourceMappingURL=UnorderedListProps.d.ts.map