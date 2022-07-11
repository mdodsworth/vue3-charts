import { Margin, Size } from '../../types';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: () => Size;
        default: () => {
            width: number;
            height: number;
        };
        required: false;
    };
    margin: {
        type: () => Margin;
        default: () => {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    };
    padding: {
        type: NumberConstructor;
        default: number;
    };
    data: {
        type: () => any[];
        default: () => never[];
    };
    dataKeys: {
        type: () => [string, string];
        required: true;
    };
    colorFn: {
        type: FunctionConstructor;
        default: () => (t: number) => string;
    };
    rcStyle: {
        type: FunctionConstructor;
        required: false;
    };
}, {
    el: import("vue").Ref<null>;
    rectangles: any;
    selected: import("vue").Ref<null>;
    getStyle: (r: any) => any;
    toKebabCase: (data: any) => {
        [x: string]: any;
    };
    onMouseOver: (i: any) => void;
    onMouseOut: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: () => Size;
        default: () => {
            width: number;
            height: number;
        };
        required: false;
    };
    margin: {
        type: () => Margin;
        default: () => {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    };
    padding: {
        type: NumberConstructor;
        default: number;
    };
    data: {
        type: () => any[];
        default: () => never[];
    };
    dataKeys: {
        type: () => [string, string];
        required: true;
    };
    colorFn: {
        type: FunctionConstructor;
        default: () => (t: number) => string;
    };
    rcStyle: {
        type: FunctionConstructor;
        required: false;
    };
}>>, {
    size: Size;
    margin: Margin;
    padding: number;
    data: any[];
    colorFn: Function;
}>;
export default _default;
