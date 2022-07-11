import { LayerType } from '../../types';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: () => LayerType;
        default: string;
    };
    dataKeys: {
        type: () => [string, string];
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: () => LayerType;
        default: string;
    };
    dataKeys: {
        type: () => [string, string];
        required: true;
    };
}>>, {
    type: LayerType;
}>;
export default _default;
