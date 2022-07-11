declare const _default: import("vue").DefineComponent<{
    selectedBar: {
        type: ObjectConstructor;
        default: () => null;
    };
    barStyle: {
        type: (ObjectConstructor | FunctionConstructor)[];
        default: () => {
            fill: string;
        };
    };
    barStyleSelected: {
        type: (ObjectConstructor | FunctionConstructor)[];
        default: () => {
            fill: string;
        };
    };
    maxWidth: {
        type: NumberConstructor;
        default: number;
    };
    dataKeys: {
        type: () => [string, string];
        required: true;
    };
    gap: {
        type: NumberConstructor;
        default: number;
    };
}, {
    getStyle: import("vue").ComputedRef<Function>;
    getStyleSelected: import("vue").ComputedRef<Function>;
    toKebabCase: (data: any) => {
        [x: string]: any;
    };
    bars: import("vue").Ref<import("../../types").Rectangle[]>;
    mouse: import("../../hooks/useMouse").MouseReturn;
    onBarClick: (bar: any, idx: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    selectedBar: {
        type: ObjectConstructor;
        default: () => null;
    };
    barStyle: {
        type: (ObjectConstructor | FunctionConstructor)[];
        default: () => {
            fill: string;
        };
    };
    barStyleSelected: {
        type: (ObjectConstructor | FunctionConstructor)[];
        default: () => {
            fill: string;
        };
    };
    maxWidth: {
        type: NumberConstructor;
        default: number;
    };
    dataKeys: {
        type: () => [string, string];
        required: true;
    };
    gap: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    selectedBar: Record<string, any>;
    barStyle: Function | Record<string, any>;
    barStyleSelected: Function | Record<string, any>;
    maxWidth: number;
    gap: number;
}>;
export default _default;
