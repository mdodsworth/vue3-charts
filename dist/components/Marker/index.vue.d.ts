declare const _default: import("vue").DefineComponent<{
    value: {
        type: NumberConstructor;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    strokeDasharray: {
        type: StringConstructor;
        default: () => string;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeOpacity: {
        type: NumberConstructor;
        default: number;
    };
}, {
    y: import("vue").Ref<number>;
    canvas: import("vue").Ref<{}>;
    direction: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: NumberConstructor;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    strokeDasharray: {
        type: StringConstructor;
        default: () => string;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeOpacity: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    label: string;
    color: string;
    strokeDasharray: string;
    strokeWidth: number;
    strokeOpacity: number;
}>;
export default _default;
