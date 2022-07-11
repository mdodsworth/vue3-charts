import { AxisConfig, Data, ScaleType } from '../types';
import { Series } from 'd3-shape';
export default class Scale {
    scale: any;
    config: AxisConfig;
    constructor(config: AxisConfig);
    createScale(type: ScaleType): void;
    changeConfig(config: AxisConfig): void;
    get type(): ScaleType;
    bandwidth(): any;
    updateRange(range: [number, number]): void;
    updateDomain(data: Data[], stackedData: Series<any, string>[], keys: string[]): void;
    map<T>(values: T[]): number[];
    mapOne<T>(val: T): number;
    ticks(): any;
    private categoryDomain;
    private numericDomain;
}
