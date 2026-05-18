import { ColorName } from '../../types';
import { default as ArticleProps, BaseArticleProps } from './ArticleProps';
export default function Article<BaseComponentColorNameType extends string = ColorName, ComponentPropsType extends BaseArticleProps<BaseComponentColorNameType> = ArticleProps<BaseComponentColorNameType>>(props: ComponentPropsType): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Article.d.ts.map