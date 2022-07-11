declare const _default: import("vue").DefineComponent<{
    barStyle: {
        type: ObjectConstructor;
        default: () => {
            'fill-opacity': number;
        };
    };
}, {
    bar: import("vue").Ref<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    canvas: import("vue").Ref<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    direction: import("vue").Ref<string>;
    mouse: import("../../hooks/useMouse").MouseReturn;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    barStyle: {
        type: ObjectConstructor;
        default: () => {
            'fill-opacity': number;
        };
    };
}>>, {
    barStyle: Record<string, any>;
}>;
export default _default;
