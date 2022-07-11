declare const _default: import("vue").DefineComponent<{
    format: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    hideLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    config: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    el: import("vue").Ref<null>;
    show: import("vue").Ref<boolean>;
    canvas: import("vue").Ref<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    direction: import("vue").Ref<import("../../types").Direction>;
    style: import("vue").ComputedRef<{
        top: string;
        left: string;
    }>;
    styleContent: import("vue").ComputedRef<{
        top: string;
        left: string;
        transform?: undefined;
    } | {
        top: string;
        transform: string;
        left?: undefined;
    }>;
    position: import("vue").Ref<{
        x: number;
        y: number;
    }>;
    items: import("vue").ComputedRef<{
        key: string;
        label: any;
        value: any;
        valueFormatted: any;
        color: any;
        hide: any;
    }[]>;
    isRight: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    format: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    hideLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    config: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    format: string;
    color: string;
    hideLine: boolean;
    config: Record<string, any>;
}>;
export default _default;
