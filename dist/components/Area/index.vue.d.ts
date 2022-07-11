declare const _default: import("vue").DefineComponent<{
    areaStyle: {
        type: ObjectConstructor;
        required: false;
    };
    dataKeys: {
        type: () => [string, string];
        required: true;
    };
    type: {
        type: () => 'normal' | 'step' | 'natural' | 'monotone';
        default: () => string;
    };
    gap: {
        type: NumberConstructor;
        default: number;
    };
}, {
    d: import("vue").Ref<string | null>;
    getStyle: import("vue").ComputedRef<() => {
        fill: string;
        fillOpacity: number;
        stroke: string;
    }>;
    toKebabCase: (data: any) => {
        [x: string]: any;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    areaStyle: {
        type: ObjectConstructor;
        required: false;
    };
    dataKeys: {
        type: () => [string, string];
        required: true;
    };
    type: {
        type: () => 'normal' | 'step' | 'natural' | 'monotone';
        default: () => string;
    };
    gap: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    type: "normal" | "step" | "natural" | "monotone";
    gap: number;
}>;
export default _default;
