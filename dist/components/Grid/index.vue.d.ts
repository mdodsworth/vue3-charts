import { Data } from '../../types';
declare const _default: import("vue").DefineComponent<{
    strokeDasharray: {
        type: StringConstructor;
        default: () => string;
    };
    hideX: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideY: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    data: import("vue").Ref<Data[]>;
    canvas: import("vue").Ref<{
        x: number;
        y: number;
        width: number;
        height: number;
    } | null>;
    xLines: import("vue").Ref<number[]>;
    yLines: import("vue").Ref<number[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    strokeDasharray: {
        type: StringConstructor;
        default: () => string;
    };
    hideX: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideY: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    strokeDasharray: string;
    hideX: boolean;
    hideY: boolean;
    center: boolean;
}>;
export default _default;
