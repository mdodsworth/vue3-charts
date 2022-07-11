import { Ref } from 'vue';
import { Rectangle } from '../types';
export interface BarsReturn {
    bars: Ref<Rectangle[]>;
}
declare const _default: (dataKeys: [string, string], props?: {
    maxWidth: number;
    gap: number;
    stacked: boolean;
    type: string;
}) => BarsReturn;
export default _default;
