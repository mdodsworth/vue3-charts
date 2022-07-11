declare const _default: import("vue").DefineComponent<{
    pieStyle: {
        type: ObjectConstructor;
        required: false;
    };
    dataKeys: {
        type: () => [string, string];
        required: true;
    };
    sort: {
        type: () => import("../../types").PieSortType;
        default: string;
        required: false;
    };
    sortFunc: {
        type: FunctionConstructor;
        required: false;
    };
}, {
    arcs: import("vue").Ref<{
        data: number | {
            valueOf: () => number;
        };
        value: number;
        index: number;
        startAngle: number;
        endAngle: number;
        padAngle: number;
    }[]>;
    arcGen: () => import("d3-shape").Arc<any, import("d3-shape").DefaultArcObject>;
    getStyle: import("vue").ComputedRef<() => {
        colors: string[];
        innerRadius: number;
        cornerRadius: number;
        padAngle: number;
    }>;
    transform: import("vue").Ref<string>;
    getColor: (index: number) => string;
    hideTooltip: () => void;
    toKebabCase: (data: any) => void;
    showTooltip: (event: MouseEvent, index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    pieStyle: {
        type: ObjectConstructor;
        required: false;
    };
    dataKeys: {
        type: () => [string, string];
        required: true;
    };
    sort: {
        type: () => import("../../types").PieSortType;
        default: string;
        required: false;
    };
    sortFunc: {
        type: FunctionConstructor;
        required: false;
    };
}>>, {
    sort: import("../../types").PieSortType;
}>;
export default _default;
