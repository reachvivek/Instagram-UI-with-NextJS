export declare type PxToPercent = {
    measure: (n: number) => number;
    totalPercent: number;
};
export declare function PxToPercent(viewInPx: number): PxToPercent;
