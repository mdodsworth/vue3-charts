import { Ref } from 'vue';
import { Point } from '../types';
export interface PointsReturn {
    points: Ref<Point[]>;
}
declare const _default: (dataKeys: [string, string], props?: {
    stacked: boolean;
    type: string;
}) => PointsReturn;
export default _default;
