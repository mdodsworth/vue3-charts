import { Ref } from 'vue';
import { Scales } from '.';
import { Canvas, ChartConfig, Data, Layer, LayerType } from '../types';
export default class Chart {
    data: Data[];
    layers: Layer[];
    config: ChartConfig;
    scales: Scales;
    updates: Ref<number>;
    constructor(data: Data[], config: Partial<ChartConfig>);
    get bandScale(): import("./Scale").default | null;
    get canvas(): Canvas;
    getStackedData(keys: string[]): import("d3-shape").Series<{
        [key: string]: number;
    }, string>[];
    changeData(data: Data[]): void;
    changeConfig(config: Partial<ChartConfig>): void;
    addLayer(layer: Layer): void;
    removeLayer(id: string): void;
    getLayers(type?: LayerType): Layer[];
    getData(keys: string[]): number[];
    getKeys(idx?: number, type?: string | null): any[];
    getStackedKeys(idx?: number, type?: string | null): any[];
    update(_: string): void;
}
