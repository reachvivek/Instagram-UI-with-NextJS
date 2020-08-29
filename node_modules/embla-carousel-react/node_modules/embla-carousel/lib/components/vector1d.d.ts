export declare type Vector1D = {
    get: () => number;
    set: (v: Vector1D | number) => Vector1D;
    add: (v: Vector1D | number) => Vector1D;
    subtract: (v: Vector1D | number) => Vector1D;
    multiply: (n: number) => Vector1D;
    divide: (n: number) => Vector1D;
    normalize: () => Vector1D;
};
export declare function Vector1D(value: number): Vector1D;
