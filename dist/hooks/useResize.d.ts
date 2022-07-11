import { Ref } from 'vue';
export interface ResizeReturn {
    width: Ref<number>;
    height: Ref<number>;
    onResize: (fn: () => void) => void;
}
declare const _default: (el: Ref) => ResizeReturn;
export default _default;
