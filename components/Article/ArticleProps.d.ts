import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseArticleProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type ArticleProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & BaseArticleProps<BaseComponentColorNameType>;
export type { ArticleProps as default };
//# sourceMappingURL=ArticleProps.d.ts.map