import { Canvas, ChartAxis, Data, Direction } from '../types';
import { Series } from 'd3-shape';
import Scale from './Scale';
export default class Scales {
    primary: Scale;
    secondary: Scale;
    config: ChartAxis;
    constructor(config: ChartAxis);
    changeConfig(config: ChartAxis): void;
    updateRange(canvas: Canvas, direction: Direction): void;
    updateDomain(data: Data[], stackedData: Series<any, string>[], keys: Array<[string, string]>): void;
}
