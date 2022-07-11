import type { Axis } from 'd3-axis';
import { PieArcDatum } from 'd3-shape';
export declare type Arc = PieArcDatum<number | {
    valueOf(): number;
}>;
export declare type PieSortType = 'desc' | 'asc' | 'none' | 'custom';
export declare const PieSort: () => PieSortType;
export interface Point {
    x: number;
    y: number;
    props: any;
}
export interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    props: any;
}
export interface Margin {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export interface Size {
    width: number;
    height: number;
}
export interface Data {
    [key: string]: string | number;
}
export declare type LayerType = 'bar' | 'line' | 'area' | 'pie' | 'points' | 'custom';
export interface Layer {
    id: string;
    dataKeys: [string, string];
    type: LayerType;
    props: any;
}
export interface Canvas {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare type Domain = [string | number, string | number];
export declare type Direction = 'horizontal' | 'vertical' | 'circular';
export declare type ScaleType = 'band' | 'linear';
export interface AxisConfig {
    domain: Domain;
    type: ScaleType;
    format?: (_: string) => string;
    ticks?: number;
    tickValues?: any[];
    hide?: boolean;
    rotate?: boolean;
    useConfig?: (ax: Axis<any>) => void;
}
export interface ChartAxis {
    primary: AxisConfig;
    secondary: AxisConfig;
}
export interface ChartConfig {
    size: Size;
    margin: Margin;
    direction: Direction;
    axis: ChartAxis;
    axisSpace: {
        x: number;
        y: number;
    };
    controlHover?: boolean;
}
export interface Payload {
    color: string;
    label: string;
    values: any;
}
