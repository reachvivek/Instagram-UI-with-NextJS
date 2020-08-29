export declare type AlignmentOption = 'start' | 'center' | 'end' | number;
declare type Params = {
    viewSize: number;
    align: AlignmentOption;
};
export declare type Alignment = {
    measure: (n: number) => number;
};
export declare function Alignment(params: Params): Alignment;
export {};
