import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<"bottom" | "left">;
        default: string;
    };
    rotate: {
        type: BooleanConstructor;
        default: boolean;
    };
    isPrimary: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    el: import("vue").Ref<SVGGElement | undefined>;
    canvas: import("vue").Ref<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<"bottom" | "left">;
        default: string;
    };
    rotate: {
        type: BooleanConstructor;
        default: boolean;
    };
    isPrimary: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    position: "bottom" | "left";
    rotate: boolean;
    isPrimary: boolean;
}>;
export default _default;
