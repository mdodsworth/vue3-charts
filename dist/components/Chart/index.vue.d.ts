import { ChartAxis, ChartConfig, Data, Direction, Margin, Size } from '../../types';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: () => Data[];
        default: () => never[];
    };
    margin: {
        type: () => Margin;
        default: () => {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        required: false;
    };
    size: {
        type: () => Size;
        default: () => {
            width: number;
            height: number;
        };
        required: false;
    };
    direction: {
        type: () => Direction;
        default: string;
        required: false;
    };
    axis: {
        type: () => ChartAxis;
        required: false;
    };
    config: {
        type: () => Partial<ChartConfig>;
        default: () => {};
    };
}, {
    axBottomEl: import("vue").Ref<{
        $el: SVGGElement;
    } | undefined>;
    axLeftEl: import("vue").Ref<{
        $el: SVGGElement;
    } | undefined>;
    chartEl: import("vue").Ref<null>;
    hideX: import("vue").ComputedRef<boolean | undefined>;
    hideY: import("vue").ComputedRef<boolean | undefined>;
    rotateX: import("vue").ComputedRef<boolean | undefined>;
    onMouseMove: (e: MouseEvent) => void;
    onMouseOut: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: () => Data[];
        default: () => never[];
    };
    margin: {
        type: () => Margin;
        default: () => {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        required: false;
    };
    size: {
        type: () => Size;
        default: () => {
            width: number;
            height: number;
        };
        required: false;
    };
    direction: {
        type: () => Direction;
        default: string;
        required: false;
    };
    axis: {
        type: () => ChartAxis;
        required: false;
    };
    config: {
        type: () => Partial<ChartConfig>;
        default: () => {};
    };
}>>, {
    data: Data[];
    margin: Margin;
    size: Size;
    direction: Direction;
    config: Partial<ChartConfig>;
}>;
export default _default;
