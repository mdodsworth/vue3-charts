import { Point } from '../../types';
declare const _default: import("vue").DefineComponent<{
    lineStyle: {
        type: ObjectConstructor;
        required: false;
    };
    dotStyle: {
        type: ObjectConstructor;
        required: false;
    };
    hideDot: {
        type: BooleanConstructor;
        default: boolean;
    };
    dataKeys: {
        type: () => [string, string];
        required: true;
    };
    type: {
        type: () => 'normal' | 'step' | 'natural' | 'monotone';
        default: () => string;
    };
}, {
    d: import("vue").Ref<string | null>;
    mouse: import("../../hooks/useMouse").MouseReturn;
    points: import("vue").Ref<Point[]>;
    toKebabCase: (data: any) => {
        [x: string]: any;
    };
    getStyle: import("vue").ComputedRef<() => any>;
    getDotStyle: import("vue").ComputedRef<Function>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    lineStyle: {
        type: ObjectConstructor;
        required: false;
    };
    dotStyle: {
        type: ObjectConstructor;
        required: false;
    };
    hideDot: {
        type: BooleanConstructor;
        default: boolean;
    };
    dataKeys: {
        type: () => [string, string];
        required: true;
    };
    type: {
        type: () => 'normal' | 'step' | 'natural' | 'monotone';
        default: () => string;
    };
}>>, {
    type: "normal" | "step" | "natural" | "monotone";
    hideDot: boolean;
}>;
export default _default;
