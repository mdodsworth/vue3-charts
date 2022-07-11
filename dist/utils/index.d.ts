/// <reference types="ts-toolbelt" />
export declare const kebabCase: (str: string) => string;
export declare const getCol: import("Function/Curry").Curry<(col: string | number, df: any[]) => any[]>;
export declare const mapKeys: (fn: (val: string) => string, data: {
    [key: string]: any;
}) => {
    [x: string]: any;
};
export declare const kebabize: (str: string) => string;
