import { Ref } from 'vue';
interface Return {
    position: Ref<{
        x: number;
        y: number;
    }>;
    payload: any;
    show: Ref<boolean>;
}
declare const _default: () => Return;
export default _default;
