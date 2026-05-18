import { ColorName } from '../../types';
import { default as DialogMessageProps, BaseDialogMessageProps } from './DialogMessageProps';
/**
 * @deprecated Move to SpeechBubbleMessage
 */
export default function DialogMessage<BaseComponentColorNameType extends string = ColorName, ComponentPropsType extends BaseDialogMessageProps<BaseComponentColorNameType> = DialogMessageProps<BaseComponentColorNameType>>(props: ComponentPropsType): React.ReactElement;
//# sourceMappingURL=DialogMessage.d.ts.map